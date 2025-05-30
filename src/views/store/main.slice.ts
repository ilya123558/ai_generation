import { IUser } from '@/entities/users/types/users'
import { TResolution } from '@/utils/types/resolution'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface IInitialState {
  meta: {
    isCreatingImage: boolean
    isCreatingImageSubcategoryId: null | number
    displayPrompt: string | null
    activeStyle: string | null
    searchValue: string
    visibleCategory: boolean
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
    activeProfileId: number | null
    activeCategoryId: number | null
    activeSubcategoryId: number | null
    activeStyleId: number | null
  }
  user: null | IUser
}

const initialState: IInitialState = {
  meta: {
    isCreatingImage: false,
    isCreatingImageSubcategoryId: null,
    displayPrompt: null,
    searchValue: '',
    activeStyle: null,
    visibleCategory: false,
    createProfile: {
      images: [],
      error: null,
      title: ''
    }
  },
  accountData: {
    generationPoints: 0,
    profilePoints: 0,
    creatorMode: false,
    creatorModeIsBuy: true,
    resolution: '2:3',
    activeProfileId: null,
    activeCategoryId: null,
    activeSubcategoryId: null,
    activeStyleId: null
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
      state.accountData.activeSubcategoryId = null
      state.accountData.activeStyleId = null
    },
    setResolution: (state, action: PayloadAction<IInitialState['accountData']['resolution']>) => {
      state.accountData.resolution = action.payload
    },
    setActiveProfileId: (state, action: PayloadAction<IInitialState['accountData']['activeProfileId']>) => {
      state.accountData.activeProfileId = action.payload
    },
    setActiveCategoryId: (state, action: PayloadAction<IInitialState['accountData']['activeCategoryId']>) => {
      state.accountData.activeCategoryId = action.payload
    },
    setActiveSubcategoryId: (state, action: PayloadAction<IInitialState['accountData']['activeSubcategoryId']>) => {
      state.accountData.activeSubcategoryId = action.payload
    },
    setActiveStyleId: (state, action: PayloadAction<IInitialState['accountData']['activeStyleId']>) => {
      state.accountData.activeStyleId = action.payload
    },
    setResetGenerationInfo: (state) => {
      state.accountData.activeStyleId = null
      state.meta.displayPrompt = null
      state.meta.isCreatingImage = false
      state.meta.isCreatingImageSubcategoryId = null
      state.accountData.creatorMode = false
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
    setVisibleCategory: (state, action: PayloadAction<IInitialState['meta']['visibleCategory']>) => {
      state.meta.visibleCategory = action.payload
    },
    
    createImage: (state) => {
      if(state.accountData.generationPoints <= 0 ) return;
      state.meta.isCreatingImage = true
      state.meta.isCreatingImageSubcategoryId = Number(state.accountData.activeSubcategoryId)
      
      if(state.accountData.creatorMode) {
        state.accountData.generationPoints = state.accountData.generationPoints - 2
      }else{
        state.accountData.generationPoints = state.accountData.generationPoints - 1
      }
    },

    imageCreating: (state) => {
      state.meta.displayPrompt = null
      state.meta.activeStyle = null
      state.meta.isCreatingImage = false
      state.accountData.activeStyleId = null
    },
  },
})

export const {
  setUser,
  setGenerationPoints,
  setCreatorMode,
  setResolution,
  setActiveProfileId,
  setActiveCategoryId,
  setActiveSubcategoryId,
  setActiveStyleId,
  setResetGenerationInfo,
  setDisplayPrompt,
  setSearchValue,
  setCreateProfileImages,
  setCreateProfileError,
  setCreateProfileTitle,
  setVisibleCategory,
  createImage,
  imageCreating
} = mainSlice.actions
export const mainReducer = mainSlice.reducer
