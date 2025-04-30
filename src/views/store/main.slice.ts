import { IUser } from '@/entities/users/types/users'
import { TResolution } from '@/utils/types/resolution'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface IInitialState {
  accountData: {
    generationPoints: number
    profilePoints: number
    creatorMode: boolean
    creatorModeIsBuy: boolean
    resolution: TResolution
    activeProfileId: number
    activeSubcategoryId: number
  }
  user: null | IUser
}

const initialState: IInitialState = {
  accountData: {
    generationPoints: 0,
    profilePoints: 0,
    creatorMode: true,
    creatorModeIsBuy: true,
    resolution: '2:3',
    activeProfileId: 1,
    activeSubcategoryId: 1,
  },
  user: null,
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
    setResolution: (state, action: PayloadAction<IInitialState['accountData']['resolution']>) => {
      state.accountData.resolution = action.payload
    },
    setActiveProfileId: (state, action: PayloadAction<IInitialState['accountData']['activeProfileId']>) => {
      state.accountData.activeProfileId = action.payload
    },
    setActiveSubcategoryId: (state, action: PayloadAction<IInitialState['accountData']['activeSubcategoryId']>) => {
      state.accountData.activeSubcategoryId = action.payload
    },
  },
})

export const {
  setUser,
  setGenerationPoints,
  setCreatorMode,
  setResolution,
  setActiveProfileId,
  setActiveSubcategoryId,
} = mainSlice.actions
export const mainReducer = mainSlice.reducer
