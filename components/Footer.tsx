import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

function Footer() {
  return (
    <div
      className="w-full text-{#666} flex flex-col items-center gap-y-6 pt-20 "
      style={{ zIndex: 10 }}
    >
      <div className="items-start w-3/4 flex gap-x-8 pl-3">
        <FaTwitter
          size={24}
          className="text-white my-0 mx-2 cursor-pointer ease-in-out duration-200 hover:-translate-y-1"
        ></FaTwitter>
        <FaInstagram
          size={24}
          className="text-white my-0 mx-2 cursor-pointer ease-in-out duration-200 hover:-translate-y-1"
        ></FaInstagram>
        <FaFacebookF
          size={24}
          className="text-white my-0 mx-2 cursor-pointer ease-in-out duration-200 hover:-translate-y-1"
        ></FaFacebookF>
        <FaYoutube
          size={24}
          className="text-white my-0 mx-2 cursor-pointer ease-in-out duration-200 hover:-translate-y-1"
        ></FaYoutube>
      </div>
      <div className="grid text-white grid-cols-2 w-3/4 text-sm gap-y-3 gap-x-3 md:grid-cols-4 md:gap-x-0">
        <span className="hover:underline">Audio Description</span>
        <span className="hover:underline">Investor Relations</span>
        <span className="hover:underline">Legal Notices</span>
        <span className="hover:underline">Help Center</span>
        <span className="hover:underline">Jobs</span>
        <span className="hover:underline">Cookie Preferences</span>
        <span className="hover:underline">Gift Cards</span>
        <span className="hover:underline">Terms of Use</span>
        <span className="hover:underline">Corporate Information</span>
        <span className="hover:underline">Media Center</span>
        <span className="hover:underline">Privacy</span>
        <span className="hover:underline">Contact Us</span>
      </div>

      <div className="items-start w-3/4">
        <span className="text-gray px-1.5 py-1.5 border-netflix-gray text-sm border-[1px] hover:text-white">
          Service Code
        </span>
      </div>
      <div className="items-start w-3/4 text-xs">
        &copy; 1997-{new Date().getFullYear()} Netflix, Inc.
      </div>
    </div>
  )
}

export default Footer
