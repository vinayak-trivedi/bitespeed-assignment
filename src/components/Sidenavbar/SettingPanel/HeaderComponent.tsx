import styles from './settingPanel.module.css';

const HeaderComponent: React.FC = () => {
  return (
    <header className={styles.setting_panel_header}>
      <button className={styles.back_button}>
        <img src="/arrowLeft.svg" width={'25px'} height={'25px'} alt="" />
      </button>
      <h3 className={styles.header_text}>Message</h3>
    </header>
  );
};

export default HeaderComponent;