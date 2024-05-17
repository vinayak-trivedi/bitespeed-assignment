import { useFlow } from '../../../contexts/FlowProvider';
import SettingPanelPresentation from './Presentation';

const SettingPanel: React.FC = () => {
  const { updateNode, selectedNode } = useFlow();

  return (
    <SettingPanelPresentation
      content={selectedNode.data.content}
      onChange={updateNode}
    />
  );
};

export default SettingPanel;
