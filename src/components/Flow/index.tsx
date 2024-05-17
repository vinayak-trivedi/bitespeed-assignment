import ReactFlow from 'reactflow';
import { useFlow } from '../../contexts/FlowProvider';
import 'reactflow/dist/style.css';
import Node from './CustomNode';
const nodeTypes = { node: Node };

const Flow: React.FC = () => {
  const {
    nodes,
    edges,
    onNodesChange,
    onEdgesChange,
    onConnect,
    setReactFlowInstance,
    onDrop,
    onDragOver,
  } = useFlow();

  console.log(nodes, 'nodes');

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      onInit={setReactFlowInstance}
      onDrop={onDrop}
      onDragOver={onDragOver}
      fitView
      nodeTypes={nodeTypes}
    />
  );
};

export default Flow;
