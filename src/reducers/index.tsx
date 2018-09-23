import { combineReducers } from "redux";
import SpinnerReducer from "../components/spinner/reducer";
import { reducer as form } from "redux-form"

const rootReducer = combineReducers({
  form,
  spinner: SpinnerReducer
});

export default rootReducer;
