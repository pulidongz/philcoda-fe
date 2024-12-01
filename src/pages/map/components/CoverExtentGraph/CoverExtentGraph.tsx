import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'
import { Bar } from 'react-chartjs-2'

import { faker } from '@faker-js/faker'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

type CoverExtentGraphProps = {
  title?: string
  label?: string
  data?: number[]
  labels?: string[]
  color?: string
}

const CoverExtentGraph = ({
  title = 'Cover Extent Graph',
  label = 'Dataset',
  color = 'hsla(40, 78%, 47%, 1)'
}: CoverExtentGraphProps) => {
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
          text: 'Months'
        }
      },
      y: {
        display: true,
        title: {
          display: true,
          text: 'Cover (Ha)'
        }
      }
    }
  }

  const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'Novemeber',
    'December'
  ]

  const data = {
    labels,
    datasets: [
      {
        label: label,
        data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
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
export default CoverExtentGraph
