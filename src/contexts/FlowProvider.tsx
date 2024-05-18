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
import { useGetInitialData } from '../components/hooks/appHooks';

export const FlowContext = createContext<any>(undefined);

const FlowProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { nodes: initialNodes, edges: initialEdges } = useGetInitialData();
  const reactFlowWrapper = useRef<HTMLDivElement | null>(null);
  const [nodes, setNodes, onNodesChange] = useNodesState<any>(initialNodes);
  const [edges, setEdges] = useEdgesState<Edge[]>(initialEdges);
  const [reactFlowInstance, setReactFlowInstance] =
    useState<ReactFlowInstance | null>(null);
  const selectedNode = nodes.find((node) => node.selected === true);

  // This function called when a edge is connect to a node
  const onConnect = useCallback(
    (params: Connection | Edge) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  // This function called when drag is completed
  const onDragOver = useCallback((event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  // This function called when a node is dropped in the flow.
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
        selected: true,
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance, nodes.length]
  );

  // This function is called when a node is updated from the settings panel.
  // Currently, we are only updating the content key. However, I've structured this function to accommodate future enhancements.
  // By maintaining this structure, it'll be easier to extend functionality and update additional values as needed.

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

  // This function is called when back button is clicked in setting panel to mark all the nodes unselected
  const markAllAsUnSelected = useCallback(() => {
    setNodes((nds) =>
      nds.map((node) => {
        if (node.selected) {
          node.selected = false;
        }
        return node;
      })
    );
  }, [nodes]);

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
        markAllAsUnSelected,
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
