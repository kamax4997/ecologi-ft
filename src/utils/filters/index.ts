import { ITreeData } from 'utils/types'
import { groupBy } from 'lodash'
import useTreesData from 'app/hooks/useTreesData'

export function filterByDay () {
  const { treesData } = useTreesData()
  let data = [...treesData]
  data.sort(function (a: ITreeData, b: ITreeData) {
    return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
  })

  const groupByDay: {[key: string]: ITreeData[]}  = groupBy(treesData, (item: ITreeData) => {
    return item.createdAt.split('T')[0]
  })

  const treesPerDay = Object.entries(groupByDay).map(
    ([date, purchases] ) => {
      const dailyTreesCount = {
        date: date,
        trees: purchases
          .filter((purchases) => typeof purchases.value === 'number')
          .reduce((acc, purchases) => acc + purchases.value, 0),
      }
      return dailyTreesCount
    }
  )

  return treesPerDay
}

export function filterByMonth () {
  const { treesData } = useTreesData()
  let data = [...treesData]
  data.sort(function (a: ITreeData, b: ITreeData) {
    return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
  })

  const groupByMonth = groupBy(data, (item: ITreeData) => {
    return item.createdAt.substring(0, 7)
  })

  const treesPerMonth = Object.entries(groupByMonth).map(
    ([date, purchases]) => {
      const monthlyTreesCount = {
        date: date,
        trees: purchases
          .filter((purchases: ITreeData) => typeof purchases.value === 'number')
          .reduce((acc, purchases: ITreeData) => acc + purchases.value, 0),
      }
      return monthlyTreesCount
    }
  )

  return treesPerMonth
}
