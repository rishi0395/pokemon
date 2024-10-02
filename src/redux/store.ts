import { createStore, applyMiddleware, Middleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { thunk } from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "./reducer";

// Define middleware array
const middleWare: Middleware[] = [
  // Ignore TypeScript check for redux-thunk
  // @ts-ignore
  thunk,
];

// Add logger in development mode
if (process.env.NODE_ENV === "development") {
  middleWare.push(logger); // No special typing needed for logger
}

// Configure and create the store
const configureStore = () => {
  // @ts-ignore
  return createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleWare))
  );
};

export default configureStore;
