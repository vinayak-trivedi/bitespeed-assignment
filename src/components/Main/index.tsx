import Flow from '../Flow';
import SaveChanges from '../SaveChanges';
import { Sidenavbar } from '../Sidenavbar';
import styles from './main.module.css';

const Main: React.FC = () => {
  return (
    <div>
      <SaveChanges />
      <main className={styles.main}>
        <Flow />
        <Sidenavbar />
      </main>
    </div>
  );
};

export default Main;
