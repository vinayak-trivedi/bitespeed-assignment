import NodesPanel from './NodesPanel';
import styles from './sideNavbar.module.css';

export const Sidenavbar: React.FC = () => {
  return (
    <div className={styles.side_navbar}>
      <NodesPanel />
    </div>
  );
};
