import { applyMiddleware, combineReducers, legacy_createStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import logger from "redux-logger";
import reducer from "./greeting/greeting";

const middleware = applyMiddleware(thunk, logger);

const store = legacy_createStore(combineReducers({ greeting: reducer }), middleware);

export default store;