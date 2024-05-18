import { useStore } from '../../contexts/Store';
import { ACTIONS } from '../constant/appConstant';

export const useGetInitialNodes = () => {
  // currently this returns only a hardcoded values but in future we might be calling an API here and returning the intials node here
  return [
    {
      id: '1',
      type: 'node',
      data: { heading: 'Send Message', content: 'Text 1' },
      position: { x: 10, y: 200 },
    },
    {
      id: '2',
      type: 'node',
      data: { heading: 'Send Message', content: 'Text 2' },
      position: { x: 200, y: 100 },
    },
  ];
};

export const useGetToastMethods = () => {
  const { dispatch } = useStore();

  const notifySuccess = (text: string) => {
    dispatch({
      type: ACTIONS.SET_TOAST_STATE,
      payload: { toastState: { type: 'success', text } },
    });
  };

  const notifyError = (text: string) => {
    dispatch({
      type: ACTIONS.SET_TOAST_STATE,
      payload: { toastState: { type: 'failure', text } },
    });
  };

  return { notifySuccess, notifyError };
};
