import React from 'react'
import { Doughnut, Bar } from 'react-chartjs-2'

import { SpaceCards } from '../../styles'

import { Card } from '../../../../styles'

const doughnutData = {
  labels: [
    'Sua loja física',
    'Ecommerce',
    'Marketplace'
  ],
  datasets: [{
    data: [300, 50, 100],
    backgroundColor: [
      '#2EC9F0',
      '#1B56D0',
      '#151725'
    ]
  }]
}

const dataHours = {
  labels: ['8hr', '10hr', '14hr', '16hr', '19hr'],
  datasets: [
    {
      label: 'Qnt de vendas (hora)',
      backgroundColor: '#1B56D0',
      borderWidth: 1,
      hoverBackgroundColor: '#151725',
      data: [70, 51, 80, 65, 87]
    }
  ]
}

const dataMouths = {
  labels: ['Jan', 'Mar', 'Jun', 'Out', 'Dez'],
  datasets: [
    {
      label: 'Qnt de vendas (mês)',
      backgroundColor: '#1B56D0',
      borderWidth: 1,
      hoverBackgroundColor: '#151725',
      data: [700, 510, 800, 650, 870]
    }
  ]
}

export const RentsByPlatform: React.FC = () => {
  return (
    <>
      <Card>
        <Doughnut
          data={doughnutData}
          options={{
            maintainAspectRatio: false
          }}
        />
      </Card>
      <SpaceCards />

      <Card>
        <Bar
          data={dataHours}
          width={200}
          height={200}
          options={{
            maintainAspectRatio: false
          }}
        />
      </Card>

      <SpaceCards />
      <Card>
        <Bar
          data={dataMouths}
          width={200}
          height={200}
          options={{
            maintainAspectRatio: false
          }}
        />
      </Card>
    </>
  )
}
