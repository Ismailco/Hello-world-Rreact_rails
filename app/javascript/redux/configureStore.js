import { applyMiddleware, combineReducers, legacy_createStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import logger from "redux-logger";
import reducer from "./greeting/greeting";

const middleware = applyMiddleware(thunk, logger);

const reducers = combineReducers({
  greeting: reducer,
});

const store = legacy_createStore(reducers, middleware);

export default store;