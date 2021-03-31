import { FETCH_CHOOSEFILM, SET_FILM } from "../Action/type";
let initialState = {
  filmList: [],
  film: [],
};
const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_FILM:
      return { ...state, filmList: payload };
    case FETCH_CHOOSEFILM:
      return { ...state, film: payload };
    default:
      return state;
  }
};
export default reducer;
