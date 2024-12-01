import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
} from 'chart.js'
import { Line } from 'react-chartjs-2'

import FetchingPanel from '../../../../../components/FetchingPanel'
import useCoastalIntegrityData from '../../../../../services/useCoastalIntegrityData'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend)

type BeachProfileGraphProps = {
  pk: string | undefined
  title?: string
  label?: string
  data?: number[]
  labels?: string[]
}

const BeachProfileGraph = ({ title = 'Beach Profile Graph', label = 'Elevation', pk }: BeachProfileGraphProps) => {
  const { GetBeachProfileGraph } = useCoastalIntegrityData()

  if (!pk) return null

  const { data: dataTest, isLoading } = GetBeachProfileGraph({ pk })

  if (isLoading) return <FetchingPanel />

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' as const
      },
      title: {
        display: true,
        text: title
      }
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: 'Distance (m)'
        }
      },
      y: {
        display: true,
        title: {
          display: true,
          text: 'Elevation (m)'
        }
      }
    }
  }

  const labels = dataTest?.beach_profile_elevations.map((item: { point: number }) => item.point.toString()) || []
  const dataPoints =
    dataTest?.beach_profile_elevations.map((item: { x: number; dz: number }) => {
      return { x: item.x, y: item.dz }
    }) || []

  const data = {
    labels,
    datasets: [
      {
        label,
        fill: 'start',
        data: dataPoints,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)'
      }
    ]
  }

  if (!data) {
    return <p>No data available</p>
  }

  return (
    <>
      <Line options={options} data={data} />
    </>
  )
}

export default BeachProfileGraph
