import {
  SET_USER_TOKEN,
  GET_USER_TOKEN,
  DELETE_USER_TOKEN,
} from "../actions/tokenAction";

export const setUserToken = (payload) => ({
  type: SET_USER_TOKEN,
  payload,
});

export const getUserToken = () => ({
  type: GET_USER_TOKEN,
});

export const deleteUserToken = () => ({
  type: DELETE_USER_TOKEN,
});
