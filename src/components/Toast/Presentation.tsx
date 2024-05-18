import styles from './toast.module.css';

const ToastPresentation: React.FC<{ type: string; message: string }> = ({
  type,
  message,
}) => {
  return <div className={`${styles.toast} ${styles[type]}`}>{message}</div>;
};

export default ToastPresentation;
