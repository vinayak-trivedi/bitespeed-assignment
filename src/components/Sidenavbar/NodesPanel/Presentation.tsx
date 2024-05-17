import NodesPanelItem from './NodesPanelItem';
import { node } from './nodesPanel.type';
import styles from './nodesPanel.module.css';

const NodesPanelPresentation: React.FC<{ nodes: node[] }> = ({ nodes }) => {
  const nodeItems = nodes.map((node: node) => (
    <NodesPanelItem
      icon={node.icon}
      node={node.node}
      onDragStart={node.onDragStart}
      key={node.node}
    />
  ));

  return <div className={styles.node_container}>{nodeItems}</div>;
};

export default NodesPanelPresentation;
