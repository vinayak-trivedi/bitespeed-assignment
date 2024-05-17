import React, {
  DragEvent,
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
} from 'react';
import {
  Connection,
  Edge,
  Node,
  ReactFlowInstance,
  ReactFlowProvider,
  addEdge,
  useEdgesState,
  useNodesState,
} from 'reactflow';
import { useGetInitialNodes } from '../components/hooks/appHooks';

export const FlowContext = createContext<any>(undefined);

const FlowProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const initialNodes = useGetInitialNodes();
  const reactFlowWrapper = useRef<HTMLDivElement | null>(null);
  const [nodes, setNodes, onNodesChange] = useNodesState<any>(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge[]>([]);
  const [reactFlowInstance, setReactFlowInstance] =
    useState<ReactFlowInstance | null>(null);
  const selectedNode = nodes.find((node) => node.selected === true);

  const onConnect = useCallback(
    (params: Connection | Edge) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  const onDragOver = useCallback((event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback(
    (event: DragEvent<HTMLDivElement>) => {
      event.preventDefault();

      const type = event.dataTransfer.getData('application/reactflow');

      // check if the dropped element is valid
      if (!type) {
        return;
      }

      // checking if reactflowInstance is there
      if (!reactFlowInstance) {
        return;
      }

      const position = reactFlowInstance.screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });

      const label = event.dataTransfer.getData('content');

      const newNode: Node = {
        id: `${nodes.length + 1}`,
        type,
        position,
        data: { heading: 'Send Message', content: label },
        selected: true
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance, nodes.length]
  );

  // Currently, we are only updating the content key, but I have this function in this way, so that once we add more features to it, and maybe decided to update more values, we can do that easily.
  const updateNode = useCallback(
    (value: string, key: string) => {
      setNodes((nds) =>
        nds.map((node) => {
          if (node.id === selectedNode?.id) {
            node.data = {
              ...node.data,
              [key]: value,
            };
          }

          return node;
        })
      );
    },
    [nodes, selectedNode]
  );

  return (
    <FlowContext.Provider
      value={{
        reactFlowWrapper,
        onConnect,
        onDragOver,
        onDrop,
        setReactFlowInstance,
        nodes,
        edges,
        onNodesChange,
        selectedNode,
        updateNode,
      }}
    >
      <ReactFlowProvider>{children}</ReactFlowProvider>
    </FlowContext.Provider>
  );
};

export const useFlow = () => {
  const context = useContext(FlowContext);
  if (!context) {
    throw new Error('useFlow must be used within a FlowProvider');
  }
  return context;
};

export default FlowProvider;
