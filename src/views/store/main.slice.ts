import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface IInitialState {
  accountData: {
    generationPoints: number
    profilePoints: number
    creatorMode: boolean
    creatorModeIsBuy: boolean
  }
}

const initialState: IInitialState = {
  accountData: {
    generationPoints: 12,
    profilePoints: 0,
    creatorMode: true,
    creatorModeIsBuy: true
  }
}

const mainSlice = createSlice({
  name: 'mainSlice',
  initialState: initialState,
  reducers: {
    setGenerationPoints: (state, action: PayloadAction<IInitialState['accountData']['generationPoints']>) => {
      state.accountData.generationPoints = action.payload
    },
    setCreatorMode: (state, action: PayloadAction<IInitialState['accountData']['creatorMode']>) => {
      state.accountData.creatorMode = action.payload
    },
  },
})

export const { setGenerationPoints, setCreatorMode } = mainSlice.actions
export const mainReducer = mainSlice.reducer
