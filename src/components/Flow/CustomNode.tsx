import { Handle, Node, Position } from 'reactflow';
import styles from './flow.module.css';

const CustomNode: React.FC<any> = ({ data, selected }) => {
  return (
    <div className={`${styles.custom_node} ${selected && styles.custom_node_selected}`}>
      <div className={styles.top_section}>
        <img src="/whatsapp.svg" width={'10px'} height={'10px'} />
        <p className={styles.title}>{data.heading}</p>
        <div className={styles.spacer} />
        <img src="/message.svg" width={'10px'} height={'10px'} />
      </div>
      <p className={styles.content}>{data.content}</p>
      <Handle
        className={styles.connector}
        type="source"
        position={Position.Right}
        id="b"
      />
      <Handle
        className={styles.connector}
        type="target"
        position={Position.Left}
        id="a"
      />
    </div>
  );
};

export default CustomNode;
