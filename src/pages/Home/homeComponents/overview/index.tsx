import React, { useState, useEffect } from 'react'

import { Card } from '../../../../styles'

import { OverViewData, ItemOverview, ValueOverview } from './styles'

export const Overview: React.FC = () => {
  const [totalOrders, setTotalOrders] = useState(0)
  const [totalReceived, setTotalReceived] = useState(0)
  function timer(time = 10000) {
    return new Promise((resolve) => setInterval(resolve, time))
  }
  useEffect(() => {
    countOrders(30000)
    countOrders(350, setTotalReceived)
  }, [])
  async function countOrders(value: number, set = setTotalOrders) {
    for (let i = value * 0.98; i <= value; i++) {
      set(i)
      await timer(0.000009)
    }
  }
  return (
    <Card>
      <OverViewData>

        <ItemOverview>
          <ValueOverview>{totalOrders}</ValueOverview>
          <span>Total de pedidos</span>
        </ItemOverview>

        <ItemOverview notFirst>
          <ValueOverview>R${` ${totalReceived}`}</ValueOverview>
          <span>ticket médio</span>
        </ItemOverview>

      </OverViewData>
    </Card>
  )
}
