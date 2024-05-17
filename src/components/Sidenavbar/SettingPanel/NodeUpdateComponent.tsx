import styles from './settingPanel.module.css';

const NodeUpdateComponent: React.FC<{
  content: string;
  onChange: (updatedValue: string, keyToChange: string) => void;
}> = ({ content, onChange }) => {
  return (
    <div className={styles.node_update_component}>
      <h3 className={styles.title}>Text</h3>
      <textarea
        className={styles.text_update_input}
        value={content}
        onChange={(e) => onChange(e.target.value, 'content')}
      />
    </div>
  );
};

export default NodeUpdateComponent;
