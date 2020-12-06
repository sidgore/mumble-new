const SET_CURRENT_LOCATION = "SET_CURRENT_LOCATION";

import {
  SET_MUMBLE_FONT_COLOR,
  SET_MUMBLE_BACKGROUND_COLOR,
  SET_MUMBLE_BACKGROUND_IMAGE,
} from "../actions/layout";

const initialState = {
  //   geoLocaion: { latitude: null, longitude: null },
  mumbleFontColor: "white",
  mumbleBackgroundColor: "black",
  mumbleBackgroundImage: "",
};

export const layoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MUMBLE_FONT_COLOR:
      return {
        ...state,
        mumbleFontColor: action.payload,
      };
    case SET_MUMBLE_BACKGROUND_COLOR:
      return {
        ...state,
        mumbleBackgroundColor: action.payload,
      };

    case SET_MUMBLE_BACKGROUND_IMAGE:
      console.log("action", action);
      return {
        ...state,
        mumbleBackgroundImage: action.payload,
      };
    default:
      return state;
  }
};
