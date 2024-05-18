import { ReactNode, createContext, useContext, useReducer } from 'react';
import { Action, State, toastState } from '../types/store';
import { ACTIONS } from '../components/constant/appConstant';

export const StoreContext = createContext<any>(undefined);

const initialState: State = {
  toastState: null,
};

const reducer = (state: State, action: Action) => {
  const { payload, type } = action;

  switch (type) {
    case ACTIONS.SET_TOAST_STATE:
      return setToastState(state, payload.toastState);
    default:
      return state;
  }
};

const setToastState = (state: State, toastState: toastState) => {
  console.log(toastState, 'testing')
  return { ...state, toastState };
};

const StoreProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);

  if (!context) {
    throw new Error('useStore must be used within a StoreProvider');
  }

  return { dispatch: context.dispatch, ...context.state };
};

export default StoreProvider;
