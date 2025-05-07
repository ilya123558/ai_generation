import { IUser } from '@/entities/users/types/users'
import { TResolution } from '@/utils/types/resolution'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface IInitialState {
  meta: {
    isCreatingImage: boolean
    displayPrompt: string | null
    activeStyle: string | null
    searchValue: string
    createProfile: {
      images: string[]
      error: string | null
      title: string
    }
  },
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
  meta: {
    isCreatingImage: false,
    displayPrompt: null,
    searchValue: '',
    activeStyle: null,
    createProfile: {
      images: [],
      error: null,
      title: ''
    }
  },
  accountData: {
    generationPoints: 100,
    profilePoints: 0,
    creatorMode: false,
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
    setDisplayPrompt: (state, action: PayloadAction<IInitialState['meta']['displayPrompt']>) => {
      state.meta.displayPrompt = action.payload
    },
    setSearchValue: (state, action: PayloadAction<IInitialState['meta']['searchValue']>) => {
      state.meta.searchValue = action.payload
    },
    setCreateProfileImages: (state, action: PayloadAction<IInitialState['meta']['createProfile']['images']>) => {
      state.meta.createProfile.images = action.payload
    },
    setCreateProfileError: (state, action: PayloadAction<IInitialState['meta']['createProfile']['error']>) => {
      state.meta.createProfile.error = action.payload
    },
    setCreateProfileTitle: (state, action: PayloadAction<IInitialState['meta']['createProfile']['title']>) => {
      state.meta.createProfile.title = action.payload
    },
    createImage: (state, action: PayloadAction<{prompt: string, activeStyle: string | null}>) => {
      state.meta.displayPrompt = action.payload.prompt
      state.meta.isCreatingImage = true
      state.accountData.generationPoints = state.accountData.generationPoints - 2
      state.meta.activeStyle = action.payload.activeStyle
    },
    imageCreating: (state) => {
      state.meta.displayPrompt = null
      state.meta.isCreatingImage = false
      state.meta.activeStyle = null
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
  setDisplayPrompt,
  setSearchValue,
  setCreateProfileImages,
  setCreateProfileError,
  setCreateProfileTitle,
  createImage,
  imageCreating
} = mainSlice.actions
export const mainReducer = mainSlice.reducer
