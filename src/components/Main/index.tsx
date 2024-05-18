import { useStore } from '../../contexts/Store';
import Flow from '../Flow';
import SaveChanges from '../SaveChanges';
import { Sidenavbar } from '../Sidenavbar';
import Toast from '../Toast';
import styles from './main.module.css';

const Main: React.FC = () => {
  const { toastState } = useStore();
  return (
    <div>
      <SaveChanges />
      <main className={styles.main}>
        <Flow />
        <Sidenavbar />
      </main>
      {toastState && <Toast />}
    </div>
  );
};

export default Main;
