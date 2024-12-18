import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'

import { faker } from '@faker-js/faker'

ChartJS.register(ArcElement, Tooltip, Legend)

type SpeciesCompositionChartProps = {
  title?: string
  label?: string
  data?: number[]
  labels?: string[]
}

const SpeciesCompositionChart = ({
  title = 'Species Composition Chart',
  label = 'Dataset',
  labels = []
}: SpeciesCompositionChartProps) => {
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
    }
  }

  const data = {
    labels: labels,
    datasets: [
      {
        label: label,
        data: labels.map(() => faker.number.int({ min: 0, max: 100 })),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }
    ]
  }
  return (
    <>
      <Pie options={options} data={data} />
    </>
  )
}

export default SpeciesCompositionChart
