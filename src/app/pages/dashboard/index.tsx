import React, { useEffect, useMemo, useState } from 'react'
import { toast } from 'react-hot-toast'
import axios from 'utils/axios/axiosService'
import Loading from 'app/@core/loading'
import Chart from 'app/components/chart'
import Radio from 'app/components/radio'
import UseWindow from 'app/hooks/useWindow'
import useTreesData from 'app/hooks/useTreesData'
import { filterByDay, filterByMonth } from 'utils/filters'
import mockData from 'utils/mock/mock.json'
import TreesImage from 'assets/images/trees.svg'

const Dashboard: React.FC = () => {
  const { setTreesDataAction } = useTreesData()
  const screenSize = UseWindow()

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isMonthly, setIsMonthly] = useState<boolean>(false)

  const toggleFilter = () => {
    setIsMonthly(!isMonthly)
  }

  useEffect(() => {
    setIsLoading(true)
    async function getTreeData() {
      try {
        const response = await axios.get('/trees')
        setTreesDataAction(response.data)
      } catch (error) {
        toast.error("Failed to fetch from API! Will display mock data.")
        setTreesDataAction(mockData)
      }
      setIsLoading(false)
    }

    getTreeData()
  }, [])

  const chartDataByDay = filterByDay()
  const chartDataByMonth = filterByMonth()

  const chartData = useMemo(() => {
    return !isMonthly ? chartDataByDay : chartDataByMonth
  }, [isMonthly, chartDataByDay, chartDataByMonth])

  return (
    <div className='dashboard'>
      <div className='dashboard__container'>
        <div className='dashboard__start'>
          <h1 className='dashboard__title'>Trees Planted by Ecologi</h1>
          <div className='dashboard__filter'>
            <div className='dashboard__filter-group'>
              {screenSize.dynamicWidth > 550 && <img src={TreesImage} alt='Trees' />}
              <Radio
                selected={isMonthly}
                text='Daily'
                onChange={toggleFilter}
                dataCy='daily-radio'
              />
              <Radio
                selected={!isMonthly}
                text='Monthly'
                onChange={toggleFilter}
                dataCy='monthly-radio'
              />
            </div>
          </div>
        </div>
        <div className='dashboard__content'>
          {isLoading ? <Loading /> : <Chart treesData={chartData} />}
        </div>
      </div>
    </div>
  )
}

export default Dashboard
