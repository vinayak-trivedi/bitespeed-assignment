import { useStore } from '../../contexts/Store';
import { ACTIONS } from '../constant/appConstant';

export const useGetInitialData = () => {
  // currently this returns only hardcoded values but in future we might be calling an API here and returning the intials nodes and edges from api response here
  return {
    nodes: [
      {
        id: '1',
        type: 'node',
        data: { heading: 'Send Message', content: 'Text 1' },
        position: { x: 0, y: 150 },
      },
      {
        id: '2',
        type: 'node',
        data: { heading: 'Send Message', content: 'Text 2' },
        position: { x: 200, y: 100 },
      },
    ],
    edges: [{ id: 'e1-2', source: '1', target: '2' }],
  };
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
