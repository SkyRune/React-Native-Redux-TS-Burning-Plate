import { DISPLAY_SPINNER, HIDE_SPINNER } from '../components/spinner/action-types';

export default function asyncRequest(
  dispatch: any,
  type: string,
  promise: Promise<any>,
  responseCallBack: (responseData: any) => void
) {
  dispatch({ type: type + "_REQUEST_START" });
  dispatch({ type: DISPLAY_SPINNER })
  promise.then((response: any) => {
    dispatch({
      type: type + "_REQUEST_SUCCESS"
    });
    responseCallBack(response.data);
    dispatch({ type: HIDE_SPINNER })
  });
}