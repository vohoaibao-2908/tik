import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import filmComing from "../Redux/Reducers/Film";
import cinemas from "../Redux/Reducers/cinemaReducer"
import user from "../Redux/Reducers/userReducer"
//create root reducer
const reducer = combineReducers({
  filmComing,
  cinemas,
  user,
});

export const store = createStore(
  reducer,
  applyMiddleware(thunk)
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);