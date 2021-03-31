import {
  GET_CINEMA,
  GET_SYSTEMCODE,
  SET_CINEMA,
  SET_MOVIECODE,
  GET_ADDRESS,
  GET_LISTMOVIE,
  SET_TICKET,
  GET_SEATS,
} from "../Action/type";
let initialState = {
  cinemasList: [],
  cinema: [],
  systemCode: [],
  movieCode: [],
  cinemaAddress: [],
  listMovie: [],
  seat: [],
};
const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_CINEMA:
      return { ...state, cinema: payload };
    case GET_SYSTEMCODE:
      return { ...state, systemCode: payload };
    case GET_CINEMA:
      return { ...state, cinemasList: payload };
    case SET_MOVIECODE:
      return { ...state, movieCode: payload };
    case GET_ADDRESS:
      return { ...state, cinemaAddress: payload };
    case GET_LISTMOVIE:
      return { ...state, listMovie: payload };
    case SET_TICKET:
      return { ...state, ticket: payload };
    case GET_SEATS:
      return { ...state, seat: payload };
    default:
      return state;
  }
};
export default reducer;
