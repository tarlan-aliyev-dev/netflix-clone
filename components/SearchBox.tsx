import { useState, useRef, ChangeEvent } from 'react'
import { motion } from 'framer-motion'

import { FaSearch } from 'react-icons/fa'
import { Maybe } from '@/typings'
import useDimensions from '@/hooks/useDimension'
import useExternalClick from '@/hooks/useExternalClick'

export default function SearchBar(): React.ReactElement {
  const searchRef = useRef<Maybe<HTMLDivElement>>(null)
  const [isSearch, setIsSearch] = useState<boolean>(false)
  const [searchInput, setSearchInput] = useState<string>('')
  const { isMobile } = useDimensions()

  const onSearchActive = (): void => {
    setIsSearch(true)
  }

  useExternalClick(searchRef, () => {
    setIsSearch(false)
  })

  const onSearchQuery = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(target.value)
  }

  return (
    <div ref={searchRef} className="flex flex-row items-center cursor-pointer">
      <motion.div
        className="bg-black border-white border-2 flex flex-row items-center"
        initial="hidden"
        animate={isSearch ? 'visible' : 'hidden'}
        transition={{ duration: 0.45 }}
        variants={{
          visible: {
            opacity: 1,
            width: isMobile ? 120 : 250,
          },
          hidden: {
            opacity: 0,
            width: 0,
          },
        }}
      >
        <FaSearch className="my-0 mx-2 cursor-pointer ease-in-out duration-200 hover:-translate-y-1" />
        <input
          type="text"
          className="p-1 outline-none rounded-none bg-transparent text-white border-none"
          value={searchInput}
          onChange={onSearchQuery}
          placeholder="Titles, people"
        />
      </motion.div>
      {!isSearch && (
        <FaSearch
          className="h-6 w-6 cursor-pointer ease-in-out duration-200 hover:-translate-y-1"
          onMouseOver={onSearchActive}
        />
      )}
    </div>
  )
}
