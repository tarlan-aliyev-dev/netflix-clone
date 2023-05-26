import React, { useRef, useState } from 'react'

import { isEmpty } from 'lodash'
import { Movie } from '@/typings'
import Thumbnail from './Tumbnail'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

interface MovieListProps {
  title: string
  movies: Movie[]
}

const Row: React.FC<MovieListProps> = ({ movies, title }) => {
  if (isEmpty(movies)) {
    return null
  }

  const rowRef = useRef<HTMLDivElement>(null)
  const [isMoved, setIsMoved] = useState(false)

  const handleClick = (direction: string) => {
    setIsMoved(true)
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current

      const scrollTo =
        direction === 'left'
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth
      rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
    }
  }

  return (
    <div className="h-40 space-y-0.5 md:space-y-2">
      <div className="relative group flex flex-row items-center justify-start w-full">
        <h2 className="w-56 cursor-pointer text-sm font-semibold text-[#e5e5e5] transition duration-200 hover:text-white md:text-2xl">
          {title}
        </h2>
        <span className="group-hover:visible group-hover:translate-x-[6.5rem] group-hover:translate-y-0.5   transition-all duration-1000 ">
          <FaChevronRight className="w-5 h-5 group-hover:w-3 group-hover:h-3 text-green-400" />
        </span>

        <span className="text-xs  text-green-400 transition-all duration-1000  translate-y-0.5 invisible opacity-0   group-hover:opacity-100 group-hover:visible -translate-x-5 group-hover:translate-x-1">
          Explore All
        </span>
      </div>
      <div className="relative md:-ml-2">
        <FaChevronLeft
          className={`absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 ${
            !isMoved && 'hidden'
          }`}
          onClick={() => handleClick('left')}
        />
        <div className="flex items-center" ref={rowRef}>
          {movies.map((movie) => (
            <Thumbnail key={movie.id} movie={movie} />
          ))}
        </div>
        <FaChevronRight
          className="absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100"
          onClick={() => handleClick('right')}
        />
      </div>
    </div>
  )
}

export default Row
