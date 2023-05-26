import AnimatedXButton from '@/components/AnimatedXButton'
import TransitionEffect from '@/components/TransitionEffect'
import Link from 'next/link'
import React from 'react'

const ErrorPage = () => {
  return (
    <>
      <section className="flex flex-row opacity-90 justify center items-center h-screen p-16 bg-[url('https://images.hdqwalls.com/wallpapers/the-last-kingdom-minimal-4k-6n.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
        <TransitionEffect />
        <div className="flex flex-col items-center justify-center px-5 mx-auto my-8">
          <nav className="px-12 py-5 h-20 flex items-center space-x-2 md:space-x-10">
            <title>Netflix</title>
            <img
              src="https://rb.gy/ulxxee"
              className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6"
              width={150}
              height={150}
            />
            <AnimatedXButton />
          </nav>
          <div className="max-w-md text-center">
            <h2 className="mb-8 font-extrabold flex flex-row gap-6 text-9xl dark:text-gray-600">
              <span className="text-red-700">404</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-40 h-40 text-white"
              >
                <path
                  fill="currentColor"
                  d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z"
                ></path>
                <rect
                  width="176"
                  height="32"
                  x="168"
                  y="320"
                  fill="currentColor"
                ></rect>
                <polygon
                  fill="currentColor"
                  points="210.63 228.042 186.588 206.671 207.958 182.63 184.042 161.37 162.671 185.412 138.63 164.042 117.37 187.958 141.412 209.329 120.042 233.37 143.958 254.63 165.329 230.588 189.37 251.958 210.63 228.042"
                ></polygon>
                <polygon
                  fill="currentColor"
                  points="383.958 182.63 360.042 161.37 338.671 185.412 314.63 164.042 293.37 187.958 317.412 209.329 296.042 233.37 319.958 254.63 341.329 230.588 365.37 251.958 386.63 228.042 362.588 206.671 383.958 182.63"
                ></polygon>
              </svg>
            </h2>
            <p className="font-bold text-white text-5xl whitespace-nowrap">
              Opss...! You are lost.
            </p>
            <p className="mt-4 mb-8 dark:text-gray-400 text-white">
              We could'n find the page. Please go back and I'm sure you can find
              that you're looking for
            </p>
            <Link
              href="/"
              className="px-8 py-3 font-semibold rounded border-2 border-gray-500 bg-white text-black hover:bg-gray-300"
            >
              Back to homepage
            </Link>
            <p className="text-white py-4 mt-4 text-2xl font-light border-l-4 border-l-red-700">
              Error Code{' '}
              <span className="text-white font-extrabold">NSES-404</span>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default ErrorPage
