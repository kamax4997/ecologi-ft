import React, { useMemo } from 'react'
import { 
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'
import { ITreeFiltered } from 'utils/types'
import UseWindow from 'app/hooks/useWindow'

interface IChartProps {
  treesData: ITreeFiltered[]
}

const Chart: React.FC<IChartProps> = (props: IChartProps) => {
  const { treesData } = props
  const screenSize = UseWindow()

  const chartWidth = useMemo(() => {
    if (screenSize.dynamicWidth < 550) {
      return 400
    } else if (screenSize.dynamicWidth < 950) {
      return 500
    }

    return 900
  }, [screenSize])

  return (
    <div className='chart-container'>
      <div className='chart-body'>
        <LineChart
          width={chartWidth}
          height={400}
          data={treesData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis dataKey="trees" />
          <Tooltip />
          <Legend />
          <Legend />

          <Line dataKey="trees" fill="#0c9e77" />
        </LineChart>
      </div>
    </div>
  )
}

export default Chart
