import React from 'react'
import Link from 'next/link'
import { useQueryClient } from 'react-query'
import { ChevronDoubleLeftIcon } from '@heroicons/react/20/solid'
import { Rocket } from '../types/types'
import { Layout } from '../components/Layout'
import { RocketItem } from '../components/RocketItem'
import { RocketList } from '../components/RocketList'

const ReadCache: React.FC = () => {
  const queryClient = useQueryClient()
  const data = queryClient.getQueryData<Rocket[]>('rockets')

  return (
    <Layout title="read cache">
      <p className="my-5 text-blue-500 text-xl font-bold">
        Read out cache data
      </p>
      <RocketList status="" rockets={data} />
      <Link href="/" passHref>
        <div className="mt-20 flex items-center cursor-pointer">
          <ChevronDoubleLeftIcon className="h-5 w-5 mx-1 text-blue-500" />
        </div>
      </Link>
    </Layout>
  )
}

export default ReadCache
