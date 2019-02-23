import { combineReducers } from "redux";
import events from "./eventsReducer";
import user from "./userReducer";

const rootReducer = combineReducers({
  events,
  user
});

export default rootReducer;
