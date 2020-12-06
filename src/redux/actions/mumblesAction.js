import {
  SET_ALL_USERS_MUMBLES,
  ADD_MY_NEW_MUMBLE,
} from "../reducers/mumblesReducer";
export const setAllUsersMumbles = (payload = []) => ({
  type: SET_ALL_USERS_MUMBLES,
  payload,
});
export const addMyNewMumble = (payload = {}) => ({
  type: ADD_MY_NEW_MUMBLE,
  payload,
});
