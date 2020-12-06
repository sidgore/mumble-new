import {
  SET_USER_TOKEN,
  GET_USER_TOKEN,
  DELETE_USER_TOKEN,
} from "../actions/tokenAction";

export const tokenReducer = (state = null, action) => {
  switch (action.type) {
    case SET_USER_TOKEN:
      return action.payload;
    case GET_USER_TOKEN:
      return state;
    case DELETE_USER_TOKEN:
      return null;
    default:
      return state;
  }
};
