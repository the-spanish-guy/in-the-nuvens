import React, { ReactElement, useEffect } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

const data = {
  labels: ['Red', 'Blue', 'Yellow'],

  datasets: [
    {
      data: [12, 19, 3],
      backgroundColor: [
        'rgba(140, 124, 252, 0.2)',
        'rgba(84, 196, 228, 0.2)',
        'rgba(133, 175, 249, 0.2)'
      ],
      borderColor: [
        'rgba(140, 124, 252, 1)',
        'rgba(84, 196, 228, 1)',
        'rgba(133, 175, 249, 1)'
      ],
      borderWidth: 1
    }
  ]
}

const Donut = (): ReactElement => {
  return (
    <div>
      <Doughnut data={data} width={50} height={50} />
    </div>
  )
}

export default Donut
