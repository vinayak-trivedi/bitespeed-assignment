import { useNodes } from '../sideNavbar.hook';
import NodesPanelPresentation from './Presentation';

const NodesPanel: React.FC = () => {
  const nodes = useNodes();

  return <NodesPanelPresentation nodes={nodes} />;
};

export default NodesPanel;
