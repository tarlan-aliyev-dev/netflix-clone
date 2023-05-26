import { Movie } from '../typings'
import React, { useCallback, useState } from 'react'
import { useRouter } from 'next/router'
import { FaChevronDown, FaHeart, FaPlay, FaRegHeart } from 'react-icons/fa'
import { GrLike } from 'react-icons/gr'
import { useRecoilState } from 'recoil'
import { modalState, movieState } from '@/atoms/modalAtom.'
import ReactPlayer from 'react-player'
import useAuth from '@/hooks/useAuth'

interface Props {
  movie: Movie
}

function Thumbnail({ movie }: Props) {
  const [trailer, setTrailer] = useState('')
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState)
  const [showModal, setShowModal] = useRecoilState(modalState)

  const [like, setLike] = useState(false)
  const [saved, setSaved] = useState(false)

  const { user } = useAuth()

  const router = useRouter()
  const redirectToWatch = useCallback(
    () => router.push(`/watch/${movie.id}`),
    [router, movie.id]
  )

  const saveShow = async () => {
    if (user?.email) {
      setLike(!like)
      setSaved(true)
    } else {
      alert('Please login to save a movie')
    }
  }

  return (
    <div className="relative group bg-zinc-900 h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px]">
      <img
        onClick={redirectToWatch}
        draggable={false}
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
        className="cursor-pointer
        object-cover
        transition
        duration
        shadow-xl
        rounded-md
        delay-300
        w-full
        group-hover:opacity-90
        sm:group-hover:opacity-0
        h-28"
        alt={movie?.title || movie?.name || movie?.original_name}
      />
      <div
        className="
        opacity-0
        absolute
        top-0
        transition
        duration-200
        z-10
        invisible
        sm:visible
        delay-300
        w-full
        scale-0
        group-hover:scale-110
        group-hover:-translate-y-[6vw]
        group-hover:translate-x-[2vw]
        group-hover:opacity-100
      "
      >
        <img
          onClick={redirectToWatch}
          draggable={false}
          src={`https://image.tmdb.org/t/p/w500${
            movie.backdrop_path || movie.poster_path
          }`}
          className="cursor-pointer
          object-cover
          transition
          duration
          shadow-xl
          rounded-t-md
          w-full
          h-[12vw]"
          alt={movie?.title || movie?.name || movie?.original_name}
        />
        {/* <ReactPlayer
          url={`https://www.youtube.com/watch?v=${trailer}`}
          width="100%"
          height="100%"
          playing
          className="object-cover brightness-[60%] transition duration-500"
          autoPlay
          muted
          loop
        /> */}
        <div
          className="
          z-10
          bg-zinc-800
          p-2
          lg:p-4
          absolute
          w-full
          transition
          shadow-md
          rounded-b-md
          "
        >
          <div className="flex flex-row items-center gap-3">
            <div
              onClick={redirectToWatch}
              className="cursor-pointer w-6 h-6 lg:w-10 lg:h-10 bg-white rounded-full flex justify-center items-center transition hover:bg-neutral-300"
            >
              <FaPlay className="text-black w-4 lg:w-6" />
            </div>

            <div onClick={saveShow}>
              {like ? (
                <FaHeart className="text-white w-6 h-6 hover:text-red-700" />
              ) : (
                <FaRegHeart className="text-white w-6 h-6 hover:text-gray-400" />
              )}
            </div>

            <div
              onClick={() => {
                setCurrentMovie(movie)
                setShowModal(true)
              }}
              className="cursor-pointer ml-auto group/item w-6 h-6 lg:w-10 lg:h-10 border-white border-2 rounded-full flex justify-center items-center transition hover:border-neutral-300"
            >
              <FaChevronDown className="text-white group-hover/item:text-neutral-300 w-4 lg:w-6" />
            </div>
          </div>
          <p className="text-green-400 font-semibold mt-4">
            New <span className="text-white">2023</span>
          </p>
          <div className="flex flex-row mt-4 gap-2 items-center">
            <p className="text-white text-[10px] lg:text-sm">
              {movie?.release_date}
            </p>
          </div>
          <div className="flex flex-row items-center gap-2 mt-4 text-[8px] text-white lg:text-sm">
            <p className="uppercase">{movie?.original_language}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Thumbnail
