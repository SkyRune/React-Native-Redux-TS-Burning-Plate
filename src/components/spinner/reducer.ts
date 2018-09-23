import {
  DISPLAY_SPINNER,HIDE_SPINNER } from "./action-types";

export interface ISpinnerReducer{
  display: boolean;
}
const initialState: ISpinnerReducer = {
  display: false
};

export default function SpinnerReducer(state = initialState, action: any):  ISpinnerReducer{
  switch (action.type) {
    case DISPLAY_SPINNER:
      return {
        display: true
      };
    case HIDE_SPINNER:
      return {
        display: false
      };
    default:
      return state;
  }
}

