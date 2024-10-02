import { combineReducers } from "redux";
import stateReducer from "./stateReducer";

export default combineReducers({
  pokemon: stateReducer,
});
