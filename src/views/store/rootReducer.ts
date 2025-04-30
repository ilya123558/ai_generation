import { combineReducers } from "@reduxjs/toolkit";
import { mainReducer } from "./main.slice";
import { usersApi } from "@/entities/users/api/users.api";
import { categoriesApi } from "@/entities/categories/api/categories.api";
import { generationsApi } from "@/entities/generations/api/generations.api";
import { stylesApi } from "@/entities/styles/api/styles.api";
import { healthApi } from "@/entities/health/api/health.api";

export const rootReducer = combineReducers({
  main: mainReducer,
  [usersApi.reducerPath]: usersApi.reducer,
  [categoriesApi.reducerPath]: categoriesApi.reducer,
  [generationsApi.reducerPath]: generationsApi.reducer,
  [stylesApi.reducerPath]: stylesApi.reducer,
  [healthApi.reducerPath]: healthApi.reducer,
})