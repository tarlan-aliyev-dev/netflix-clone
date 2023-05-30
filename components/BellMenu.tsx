import Image from 'next/image'
import React from 'react'

interface BellMenuProbs {
  visible?: boolean
}

const BellMenu: React.FC<BellMenuProbs> = ({ visible }) => {
  if (!visible) {
    return null
  }

  return (
    <div className="bg-black gap-3 w-100 mt-5 mr-20 opacity-80 absolute top-14 right-0 py-5 flex-row border-t-2 border-t-white flex">
      <div className="flex flex-col gap-3">
        <Image
          src="https://assets.nflxext.com/us/email/gem/comingsoon/csInapp_112x63.png"
          alt=""
        />
      </div>
      <div className=" text-white flex flex-col">
        <p>Netflix Lookahead</p>
        <p>Explore what&apos;s coming soon</p>
        <p className="opacity-50">1 day ago</p>
      </div>
    </div>
  )
}

export default BellMenu
