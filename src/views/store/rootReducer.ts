import { combineReducers } from "@reduxjs/toolkit";
import { mainReducer } from "./main.slice";
// import { usersApi } from "@/entities/users/api/users.api";

export const rootReducer = combineReducers({
  main: mainReducer,
  // [usersApi.reducerPath]: usersApi.reducer,
})