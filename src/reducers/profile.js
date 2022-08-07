import { GET_PROFILE, UPDATE_PROFILE } from "../actions/types";

const initalState = {
  profile: null,
};

export default function (state = initalState, action) {
  switch (action.type) {
    case UPDATE_PROFILE:
      return {
        ...state,
        profile: action.payload,
      };
    case GET_PROFILE:
      return {
        ...state,
        profile: action.payload,
      };

    default:
      return state;
  }
}
