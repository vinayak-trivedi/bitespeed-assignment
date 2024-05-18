import { useEffect } from 'react';
import { useStore } from '../../contexts/Store';
import ToastPresentation from './Presentation';
import { ACTIONS } from '../../constants/appConstant';

const Toast: React.FC = () => {
  const { toastState, dispatch } = useStore();

  useEffect(() => {
    let timer: any;
    if (toastState) {
      timer = setTimeout(() => {
        dispatch({
          type: ACTIONS.SET_TOAST_STATE,
          payload: { toastState: null },
        });
      }, 2000);
    }

    return () => clearTimeout(timer);
  }, [toastState]);

  return <ToastPresentation type={toastState.type} message={toastState.text} />;
};

export default Toast;
