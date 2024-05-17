import { useFlow } from '../../../contexts/FlowProvider';
import SettingPanelPresentation from './Presentation';

const SettingPanel: React.FC = () => {
  const { updateNode, selectedNode, markAllAsUnSelected } = useFlow();

  return (
    <SettingPanelPresentation
      content={selectedNode.data.content}
      onChange={updateNode}
      markAllAsUnSelected={markAllAsUnSelected}
    />
  );
};

export default SettingPanel;
