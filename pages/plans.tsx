import Head from 'next/head'
import Link from 'next/link'
import useAuth from '../hooks/useAuth'
import { FaCheck } from 'react-icons/fa'
import Table from '@/components/Table'
import Loader from '@/components/Loader'
import Header from '@/components/Header'
import TransitionEffect from '@/components/TransitionEffect'
import Image from 'next/image'

function Plans() {
  const { logout, user } = useAuth()

  return (
    <>
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TransitionEffect />
      <header className="border-b border-white/10 bg-[#141414]">
        <Link href="/">
          <Image
            src="https://rb.gy/ulxxee"
            alt="Netflix"
            width={150}
            height={90}
            className="cursor-pointer object-contain"
          />
        </Link>
        <button
          className="text-lg font-medium hover:underline"
          onClick={logout}
        >
          Sign Out
        </button>
      </header>

      <main className="mx-auto max-w-5xl px-5 pt-28 pb-12 transition-all md:px-10">
        <h1 className="mb-3 text-3xl font-medium">
          Choose the plan that&apos;s right for you
        </h1>
        <ul>
          <li className="flex items-center gap-x-2 text-lg">
            <FaCheck className="h-7 w-7 text-[#E50914]" /> Watch all you want.
            Ad-free.
          </li>
          <li className="flex items-center gap-x-2 text-lg">
            <FaCheck className="h-7 w-7 text-[#E50914]" /> Recommendations just
            for you.
          </li>
          <li className="flex items-center gap-x-2 text-lg">
            <FaCheck className="h-7 w-7 text-[#E50914]" /> Change or cancel your
            plan anytime.
          </li>
        </ul>

        <div className="mt-4 flex flex-col space-y-4">
          <div className="flex w-full items-center justify-end self-end md:w-3/5">
            <div className="opacity-60">Product Name</div>
          </div>

          <Table />

          <button className="mx-auto w-11/12 rounded bg-[#E50914] py-4 text-xl shadow hover:bg-[#f6121d] md:w-[420px]">
            <Loader color="dark:fill-gray-300" />
          </button>
        </div>
      </main>
    </>
  )
}

export default Plans
