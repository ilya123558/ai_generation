import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
import { usersApi } from "@/entities/users/api/users.api";
import { categoriesApi } from "@/entities/categories/api/categories.api";
import { generationsApi } from "@/entities/generations/api/generations.api";
import { stylesApi } from "@/entities/styles/api/styles.api";
import { healthApi } from "@/entities/health/api/health.api";


export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
  .concat(usersApi.middleware)
  .concat(categoriesApi.middleware)
  .concat(generationsApi.middleware)
  .concat(stylesApi.middleware)
  .concat(healthApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch