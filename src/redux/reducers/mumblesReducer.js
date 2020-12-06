export const SET_ALL_USERS_MUMBLES = "SET_ALL_USERS_MUMBLES";
export const ADD_MY_NEW_MUMBLE = "ADD_MY_NEW_MUMBLE";

const initialState = { allUsersMumbles: [], myMumbles: [{ hello: "sss" }] };

export const mumblesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALL_USERS_MUMBLES:
      return {
        ...state,
        allUsersMumbles: action.payload,
      };

    case ADD_MY_NEW_MUMBLE:
      return {
        ...state,
        allUsersMumbles: state.allUsersMumbles.concat(action.payload),
        myMumbles: action.payload,
      };
    default:
      return state;
  }
};
