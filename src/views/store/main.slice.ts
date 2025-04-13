import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface IInitialState {
  user: any
}

const initialState: IInitialState = {
  user: null,
}

const mainSlice = createSlice({
  name: 'mainSlice',
  initialState: initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IInitialState['user']>) => {
      state.user = action.payload
    },
  },
})

export const { setUser } = mainSlice.actions
export const mainReducer = mainSlice.reducer
