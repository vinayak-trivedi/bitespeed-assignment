import Flow from '../Flow';
import { Sidenavbar } from '../Sidenavbar';
import styles from './main.module.css';

const Main: React.FC = () => {
  return (
    <div>
      <div className={styles.main}>
        <Flow />
        <Sidenavbar />
      </div>
    </div>
  );
};

export default Main;
