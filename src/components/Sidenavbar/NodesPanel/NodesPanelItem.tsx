import styles from './nodesPanel.module.css';
import { node } from './nodesPanel.type';

// This draggable component allows users to interactively drag and drop node items into the flow.
// Refer to the official documentation: https://reactflow.dev/examples/interaction/drag-and-drop

const NodesPanelItem: React.FC<node> = ({ node, icon, onDragStart }) => {
  return (
    <div
      draggable
      onDragStart={(event) => onDragStart(event, 'node', 'message')}
      className={styles.node_item}
    >
      <img src={icon} width={'20px'} height={'20px'} alt="" />
      <p className={styles.text}>{node}</p>
    </div>
  );
};

export default NodesPanelItem;
