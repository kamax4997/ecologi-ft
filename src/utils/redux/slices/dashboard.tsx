import { createSlice } from '@reduxjs/toolkit'
import { AppDispatch } from 'utils/redux/store'
import { ITreeData } from 'utils/types'

export interface IInitialState {
  treesData: ITreeData[]
}

const initialState: IInitialState = {
  treesData: []
}

const slice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setTreesData(state, action) {
      state.treesData = action.payload.treesData
    },
    clearTreesData(state) {
      state.treesData = []
    },
  },
})

// Reducer
export default slice.reducer

export function setTreesData(treesData: ITreeData[]) {
  return async (dispatch: AppDispatch) => {
    dispatch(slice.actions.setTreesData({
      treesData,
    }))

    return true
  }
}

export function clearTreesData() {
  return async (dispatch: AppDispatch) => {
    dispatch(slice.actions.clearTreesData())
    return true
  }
}
