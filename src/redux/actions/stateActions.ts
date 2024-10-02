import {
  STATE_INFO_STARTED,
  STATE_INFO_FAILED,
  STATE_INFO_SUCCESS,
} from "./types";

import createRequestAction from "../createRequestAction";
import { getStateInfo } from "../../services/stateInfoApi";

export const stateInfoStarted = () => ({
  type: STATE_INFO_STARTED,
});

export const stateInfoSuccess = (data) => ({
  type: STATE_INFO_SUCCESS,
  payload: data,
});

export const stateInfoFailed = (error) => ({
  type: STATE_INFO_FAILED,
  payload: error,
});

export function fetchStateInfo({ url = "" }) {
  return createRequestAction({
    onStart: (dispatch) => dispatch(stateInfoStarted()),
    request: () => getStateInfo(url),
    onSuccess: (dispatch, resp) => {
      if (Object.keys(resp).length) {
        dispatch(stateInfoSuccess(resp));
      } else {
        dispatch(stateInfoFailed("error"));
      }
    },
    onFailure: (dispatch, error) => {
      dispatch(stateInfoFailed(error));
    },
  });
}
