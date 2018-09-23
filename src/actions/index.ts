import { FETCH_PEOPLE_IN_SPACE } from "./action-types";
import axios from "axios";

import asyncRequest from '../services/asyncRequest';

// Here is how to make an asyncRequest 
//( it will trigger the display of the spinner in redux until the promise end)
export function fetchPeopleInSpace() {
  return function (dispatch: any) {
    asyncRequest(
      dispatch,
      FETCH_PEOPLE_IN_SPACE,
      axios.get("http://api.open-notify.org/astros.json"),
      (result: any) => {

      }
    )
  };
}
