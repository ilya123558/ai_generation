import { IUser } from '@/entities/users/types/users'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface IInitialState {
  accountData: {
    generationPoints: number
    profilePoints: number
    creatorMode: boolean
    creatorModeIsBuy: boolean
  },
  user: null | IUser
}

const initialState: IInitialState = {
  accountData: {
    generationPoints: 12,
    profilePoints: 0,
    creatorMode: true,
    creatorModeIsBuy: true
  },
  user: null
}

const mainSlice = createSlice({
  name: 'mainSlice',
  initialState: initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IInitialState['user']>) => {
      state.user = action.payload
    },
    setGenerationPoints: (state, action: PayloadAction<IInitialState['accountData']['generationPoints']>) => {
      state.accountData.generationPoints = action.payload
    },
    setCreatorMode: (state, action: PayloadAction<IInitialState['accountData']['creatorMode']>) => {
      state.accountData.creatorMode = action.payload
    },
  },
})

export const { setUser, setGenerationPoints, setCreatorMode } = mainSlice.actions
export const mainReducer = mainSlice.reducer
