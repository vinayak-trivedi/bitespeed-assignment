import HeaderComponent from './HeaderComponent';
import NodeUpdateComponent from './NodeUpdateComponent';
import styles from './settingPanel.module.css';

const SettingPanelPresentation: React.FC<{
  content: string;
  onChange: (updatedValue: string, keyToChange: string) => void;
  markAllAsUnSelected: () => void;
}> = ({ content, onChange, markAllAsUnSelected }) => {
  return (
    <div className={styles.setting_panel}>
      <HeaderComponent markAllAsUnSelected={markAllAsUnSelected} />
      <div className={styles.line} />
      <NodeUpdateComponent content={content} onChange={onChange} />
    </div>
  );
};

export default SettingPanelPresentation;
