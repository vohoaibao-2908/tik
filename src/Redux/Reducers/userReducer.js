import { FETCH_CREDENTIAL } from "../Action/type";

let initialState = {
  credentials: "",
};
const reducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case FETCH_CREDENTIAL:
      return { ...state, credentials: payload };
    default:
      return state;
  }
};
export default reducer;
