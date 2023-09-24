import { combineReducers, configureStore } from "@reduxjs/toolkit";
import usersReducer from "./userReducer";

const rootReducer = combineReducers({
  users: usersReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
