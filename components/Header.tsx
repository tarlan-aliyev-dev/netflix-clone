import { BsBell, BsSearch } from 'react-icons/bs'
import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import NavbarItem from './NavbarItem'
import { FaChevronDown } from 'react-icons/fa'
import MobileMenu from './MobileMenu'
import AccountMenu from './AccountMenu'
import SearchBox from './SearchBox'
import BellMenu from './BellMenu'

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [showAccountMenu, setShowAccountMenu] = useState(false)
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [showBellMenu, setShowBellMenu] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const toggleMobileMenu = useCallback(() => {
    setShowMobileMenu((current) => !current)
  }, [])

  const toggleAccountMenu = useCallback(() => {
    setShowAccountMenu((current) => !current)
  }, [])

  const toggleBellMenu = useCallback(() => {
    setShowBellMenu((current) => !current)
  }, [])

  return (
    <header
      className={`${
        isScrolled && 'bg-zinc-900 bg-opacity-90'
      } w-full fixed z-40`}
    >
      <div className="flex items-center space-x-2 md:space-x-10">
        <img
          src="https://rb.gy/ulxxee"
          width={100}
          height={100}
          className="cursor-pointer object-contain sm:bg-[url('https://loodibee.com/wp-content/uploads/Netflix-N-Symbol-logo.png')]"
        />
        <div className="flex-row ml-8 gap-7 hidden lg:flex">
          <NavbarItem label="Home" active />
          <Link href="/plans">
            <NavbarItem label="Plans" />
          </Link>
          <NavbarItem label="Series" />
          <NavbarItem label="Films" />
          <NavbarItem label="New & Popular" />
          <NavbarItem label="My List" />
          <NavbarItem label="Browse by Languages" />
        </div>
        <div
          onClick={toggleMobileMenu}
          className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative"
        >
          <p className="text-white text-sm">Browse</p>
          <FaChevronDown
            className={`w-4 text-white fill-white transition ${
              showMobileMenu ? 'rotate-180' : 'rotate-0'
            }`}
          />
          <MobileMenu visible={showMobileMenu} />
        </div>
      </div>
      <div className="flex items-center flex-row space-x-4 text-sm font-light">
        <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition mr-6">
          <SearchBox />
        </div>

        <p className="hidden lg:inline text-white">Children</p>

        <div
          onMouseEnter={toggleBellMenu}
          className="text-gray-200 hover:text-gray-300 cursor-pointer transition"
        >
          <BsBell className="h-6 w-6" />
          <BellMenu visible={showBellMenu} />
        </div>

        <div
          onMouseEnter={toggleAccountMenu}
          className="flex flex-row items-center gap-2 cursor-pointer relative"
        >
          <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden">
            <img src="https://rb.gy/g1pwyx" alt="" />
          </div>
          <FaChevronDown
            className={`w-4 text-white fill-white transition ${
              showAccountMenu ? 'rotate-180' : 'rotate-0'
            }`}
          />
          <AccountMenu visible={showAccountMenu} />
        </div>
      </div>
    </header>
  )
}

export default Header
