import React from 'react'
import { RocketItem } from './RocketItem'
import { useQueryRockets } from '../hooks/useQueryRockets'

export const RocketList: React.FC = () => {
  const { status, data } = useQueryRockets()

  if (status === 'loading') return <p>{'Loading...'}</p>
  if (status === 'error') return <p>{'Error'}</p>

  return (
    <ul>
      {data?.map((rocket) => (
        <RocketItem key={rocket.id} rocket={rocket}></RocketItem>
      ))}
    </ul>
  )
}
