import {
  SET_MUMBLE_FONT_COLOR,
  SET_MUMBLE_BACKGROUND_COLOR,
  SET_MUMBLE_BACKGROUND_IMAGE,
} from "../actions/layout";

export const setMumbleFontColor = (payload) => ({
  type: SET_MUMBLE_FONT_COLOR,
  payload,
});

export const setMumbleBackgroundColor = (payload) => ({
  type: SET_MUMBLE_BACKGROUND_COLOR,
  payload,
});

export const setMumbleBackgroundImage = (payload) => ({
  type: SET_MUMBLE_BACKGROUND_IMAGE,
  payload,
});
