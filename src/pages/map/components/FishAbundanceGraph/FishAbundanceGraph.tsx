import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'
import { Bar } from 'react-chartjs-2'

import { faker } from '@faker-js/faker'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

type FishAbundanceGraphProps = {
  title?: string
  label?: string
  data?: number[]
  labels?: string[]
  color?: string
  classification: 'family' | 'genus' | 'species'
}

const FishAbundanceGraph = ({
  title = 'Fish Abundance Graph',
  label = 'Dataset',
  color = 'rgb(134, 158, 199)',
  classification
}: FishAbundanceGraphProps) => {
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
          text: 'Years'
        }
      },
      y: {
        display: true,
        title: {
          display: true,
          text: `Number of ${classification}`
        }
      }
    }
  }

  const labels = ['2019', '2020', '2021', '2022', '2023']

  const data = {
    labels,
    datasets: [
      {
        label: label,
        data: labels.map(() => faker.number.int({ min: 0, max: 12 })),
        backgroundColor: color
      }
    ]
  }

  return (
    <>
      <Bar options={options} data={data} />
    </>
  )
}
export default FishAbundanceGraph
