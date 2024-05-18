import ReactFlow from 'reactflow';
import { useFlow } from '../../contexts/FlowProvider';
import 'reactflow/dist/style.css';
import styles from './flow.module.css';
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

  return (
    <div className={styles.react_flow_container}>
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
    </div>
  );
};

export default Flow;
