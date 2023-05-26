import { useEffect, useState } from 'react'
import { baseUrl } from '../constants/movie'
import { Element, Genre, Movie } from '../typings'
import { FaPlay, FaVolumeMute, FaVolumeUp } from 'react-icons/fa'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { useRecoilState } from 'recoil'
import { modalState, movieState } from '@/atoms/modalAtom.'
import ReactPlayer from 'react-player'
import PlayButton from './PlayButton'

interface Props {
  netflixOriginals: Movie[]
  genre: Genre[]
}

function Banner({ netflixOriginals, genre }: Props) {
  const [trailer, setTrailer] = useState('')

  const [genres, setGenres] = useState<Genre >()
  const [movie, setMovie] = useState<Movie | null>(null)

  const [muted, setMuted] = useState(true)

  const [currentMovie, setCurrentMovie] = useRecoilState(movieState)
  const [showModal, setShowModal] = useRecoilState(modalState)

  useEffect(() => {
    setMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
    )
  }, [netflixOriginals])

  useEffect(() => {
    if (!movie) return

    async function fetchMovie() {
      const data = await fetch(
        `https://api.themoviedb.org/3/${
          movie?.media_type === 'tv' ? 'tv' : 'movie'
        }/${movie?.id}?api_key=${
          process.env.NEXT_PUBLIC_API_KEY
        }&language=en-US&append_to_response=videos`
      ).then((response) => response.json())
      if (data?.videos) {
        const index = data.videos.results.findIndex(
          (element: Element) => element.type === 'Trailer'
        )
        setTrailer(data.videos?.results[index]?.key)
      }
      if (data?.genres) {
        setGenres(data.genres)
      }
    }

    fetchMovie()
  }, [movie])

  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12 text-white">
      <div className="absolute top-10 left-0 -z-10 h-[95vh] w-screen">
        {/* <img
          src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
          alt={movie?.title || movie?.name || movie?.original_name}
        /> */}
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${trailer}`}
          width="100%"
          height="100%"
          playing
          muted={muted}
          loop
        />
      </div>
      <h1 className="text-2xl font-bold md:text-4xl lg:text-7xl">
        {movie?.title || movie?.name || movie?.original_name}
      </h1>
      <p className="text-white text-[8px] md:text-lg mt-3 md:mt-8 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl">
        {movie?.overview}
      </p>
      <div className="relative flex flex-row items-center mt-3 md:mt-4 gap-3">
        <PlayButton id={movie?.name} />

        <button
          className="
            bg-white
            text-white
              bg-opacity-30 
              rounded-md 
              py-1 md:py-2 
              px-2 md:px-4
              w-auto 
              text-xs lg:text-lg 
              font-semibold
              flex
              flex-row
              items-center
              hover:bg-opacity-20
              transition
            "
          onClick={() => {
            setCurrentMovie(movie)
            setShowModal(true)
          }}
        >
          <AiOutlineInfoCircle className="w-4 md:w-7 mr-1" /> More Info
        </button>
        <button
          className="modalButton absolute right-20 rounded-full text-xl font-bold blacktext- transition hover:bg-[#e6e6e6]"
          onClick={() => setMuted(!muted)}
        >
          {muted ? (
            <FaVolumeMute className="h-6 w-6" />
          ) : (
            <FaVolumeUp className="h-6 w-6" />
          )}
        </button>
        <p className='text-white right-0 absolute w-16 h-8 flex opacity-50 items-center border-l-2 border-l-white bg-gray-600'>18+</p>
      </div>
    </div>
  )
}

export default Banner
