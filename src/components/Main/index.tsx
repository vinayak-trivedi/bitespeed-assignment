import Flow from '../Flow';
import styles from './main.module.css';

const Main: React.FC = () => {
  return (
    <div>
      <div className={styles.main}>
        <Flow />
      </div>
    </div>
  );
};

export default Main;
