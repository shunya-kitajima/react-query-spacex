import type { NextPage } from 'next'
import Link from 'next/link'
import { ChevronDoubleRightIcon } from '@heroicons/react/20/solid'
import { Layout } from '../components/Layout'
import { RocketList } from '../components/RocketList'
import { useQueryRockets } from '../hooks/useQueryRockets'

const Home: NextPage = () => {
  return (
    <Layout title="home">
      <p className="my-5 text-blue-500 text-xl font-bold">
        Fetching by useQuery
      </p>
      <RocketList />
    </Layout>
  )
}

export default Home
