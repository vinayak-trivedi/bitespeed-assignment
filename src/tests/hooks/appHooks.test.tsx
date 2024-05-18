import { renderHook, act } from '@testing-library/react-hooks';
import {
  useGetInitialData,
  useGetToastMethods,
} from '../../components/hooks/appHooks';
import { ACTIONS } from '../../constants/appConstant';
import { useStore } from '../../contexts/Store';

jest.mock('../../contexts/Store');

describe('useGetInitialData', () => {
  it('should return initial nodes and edges', () => {
    const { result } = renderHook(() => useGetInitialData());

    expect(result.current.nodes).toEqual([
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
    ]);

    expect(result.current.edges).toEqual([
      { id: 'e1-2', source: '1', target: '2' },
    ]);
  });
});

describe('useGetToastMethods', () => {
  it('should call dispatch with success action', () => {
    // Mock the return value of useStore
    const dispatchMock = jest.fn();
    (useStore as jest.Mock).mockReturnValue({ dispatch: dispatchMock });

    const { result } = renderHook(() => useGetToastMethods());

    result.current.notifySuccess('Success message');

    expect(dispatchMock).toHaveBeenCalledWith({
      type: ACTIONS.SET_TOAST_STATE,
      payload: { toastState: { type: 'success', text: 'Success message' } },
    });
  });

  it('should call dispatch with failure action', () => {
    // Mock the return value of useStore
    const dispatchMock = jest.fn();
    (useStore as jest.Mock).mockReturnValue({ dispatch: dispatchMock });

    const { result } = renderHook(() => useGetToastMethods());

    result.current.notifyError('Error message');

    expect(dispatchMock).toHaveBeenCalledWith({
      type: ACTIONS.SET_TOAST_STATE,
      payload: { toastState: { type: 'failure', text: 'Error message' } },
    });
  });
});
