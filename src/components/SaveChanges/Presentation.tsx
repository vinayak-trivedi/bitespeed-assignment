import styles from './saveChanges.module.css';

const SaveChangesPresentation: React.FC<{ saveNodeChanges: () => void }> = ({
  saveNodeChanges,
}) => {
  return (
    <div className={styles.save_changes_container}>
      <button onClick={saveNodeChanges} className={styles.save_button}>
        Save Changes
      </button>
    </div>
  );
};

export default SaveChangesPresentation;
