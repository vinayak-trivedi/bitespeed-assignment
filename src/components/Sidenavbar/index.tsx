import { useFlow } from '../../contexts/FlowProvider';
import NodesPanel from './NodesPanel';
import SettingPanel from './SettingPanel';
import styles from './sideNavbar.module.css';

export const Sidenavbar: React.FC = () => {
  const { selectedNode } = useFlow();
  const sideNavComponent = selectedNode ? <SettingPanel /> : <NodesPanel />;

  return <aside className={styles.side_navbar}>{sideNavComponent}</aside>;
};
