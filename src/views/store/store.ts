import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
// import { usersApi } from "@/entities/users/api/users.api";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
  // .concat(usersApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch