import React from 'react'
import Link from 'next/link'
import { useQueryClient } from 'react-query'
import { ChevronDoubleRightIcon } from '@heroicons/react/20/solid'
import { Rocket } from '../types/types'
import { Layout } from '../components/Layout'
import { RocketItem } from '../components/RocketItem'

const ReacCache: React.FC = () => {
  const queryClient = useQueryClient()
  const data = queryClient.getQueryData<Rocket[]>(['rockets'])

  return (
    <Layout title="read cache">
      <p className="my-5 text-blue-500 text-tl font-bold">
        Read out cache data
      </p>
      <ul>
        {data?.map((rocket) => (
          <RocketItem key={rocket.id} rocket={rocket} />
        ))}
      </ul>
      <Link href="/" passHref>
        <div className="mt-20 flex items-center cursor-pointer">
          <ChevronDoubleRightIcon className="h-5 w-5 mx-1 text-blue-500" />
        </div>
      </Link>
    </Layout>
  )
}

export default ReacCache
