import React from 'react'
import { RocketItem } from './RocketItem'
import { Rocket } from '../types/types'

interface Props {
  rockets: Rocket[] | undefined
  status: string
}

export const RocketList: React.FC<Props> = ({ rockets, status }) => {
  if (status === 'loading') return <p>{'Loading...'}</p>
  if (status === 'error') return <p>{'Error'}</p>

  return (
    <ul>
      {rockets?.map((rocket) => (
        <RocketItem key={rocket.id} rocket={rocket}></RocketItem>
      ))}
    </ul>
  )
}
