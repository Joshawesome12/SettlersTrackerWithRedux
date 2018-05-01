import { GET_GAME } from "../actions";

export default function(state = {}, action) {
  switch (action.type) {
    case GET_GAME:
      return action.payload;
    default:
      return state;
  }
}
