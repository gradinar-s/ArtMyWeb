import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  selectedUser: null,
};

export const setUsers = createAction("SET_USERS");
export const setSelectedUser = createAction("SET_SELECTED_USER");
export const updateUser = createAction("UPDATE_USER");

export default createReducer(initialState, {
  [setUsers]: (state, action) => {
    state.users = action?.payload;
  },
  [setSelectedUser]: (state, action) => {
    state.selectedUser = action?.payload;
  },
  [updateUser]: (state, action) => {
    state.selectedUser = { ...state.selectedUser, ...action.payload };
  },
});
