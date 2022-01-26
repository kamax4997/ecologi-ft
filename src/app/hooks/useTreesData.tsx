import { useSelector, useDispatch } from 'react-redux'
import { setTreesData, clearTreesData } from 'utils/redux/slices/dashboard'
import { IRootState } from 'utils/redux/store'
import { ITreeData } from 'utils/types'

const useTreesData = () => {
  const dispatch = useDispatch()

  const { treesData } = useSelector(
    (state: IRootState) => state.dashboard,
  )

  return {
    treesData,

    setTreesDataAction: (params: ITreeData[]) => dispatch(
      setTreesData(params),
    ),

    clearTreesDataAction: () => dispatch(
      clearTreesData(),
    ),
  }
}

export default useTreesData
