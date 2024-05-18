export type toastState = {
  type?: 'success' | 'failure',
  text?: string;
};


export type State = {
  toastState: toastState | null
}

export type Action = {
  type: string;
  payload: any;
};