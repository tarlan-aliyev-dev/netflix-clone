import React from 'react'
import { motion } from 'framer-motion'
import { animation } from '@/animation'
import Footer from '../Footer'
import Accordion from './Accordion'
export default function Info() {
  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        custom={2}
        variants={animation}
        viewport={{ once: true }}
      >
        <hr />
        <div className="flex flex-col justify-evenly items-center self-center md:flex-row md:items-center min-h-[460px] p-4 md:p-6">
          <div className="flex flex-col justify-center text-left items-center self-center text-white sm:mt-18 sm:w-full  md:w-[480px]">
            <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold ">
              Enjoy on your TV.
            </h1>
            <p className="text-xl  pt-5">
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
              Blu-ray players and more.
            </p>
          </div>
          <div className="flex justify-center flex-row items-center self-center object-contain">
            <img
              src="https://netflix-images.manikantp.repl.co/Netflix1.gif"
              alt="netflix-gif"
              className="max-w-full h-[350px] justify-center flex-row items-center self-center object-contain"
            />
          </div>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        custom={3}
        variants={animation}
        viewport={{ once: true }}
      >
        <hr />
        <div className="flex flex-col justify-evenly items-center self-center md:flex-row md:items-center min-h-[460px] p-4 md:p-6">
          <div className="image">
            <img
              src="https://netflix-images.manikantp.repl.co/Netflix2.gif"
              alt="netflix-gif"
              className="h-[350px]"
            />
          </div>
          <div className="flex flex-col justify-center text-left items-center self-center text-white sm:mt-18 sm:w-full md:w-[480px]">
            <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold">
              Download your shows to watch offline.
            </h1>
            <p className="text-xl  pt-5">
              Save your favorites easily and always have something to watch.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        custom={4}
        variants={animation}
        viewport={{ once: true }}
      >
        <hr />
        <div className="flex flex-col justify-evenly items-center self-center md:flex-row md:items-center min-h-[460px] p-4 md:p-6">
          <div className="flex flex-col justify-center text-left items-center self-center text-white sm:mt-18 sm:w-full md:w-[480px]">
            <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold">
              Watch everywhere.
            </h1>
            <p className="text-xl  pt-5">
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV without paying more.
            </p>
          </div>
          <div className="image">
            <img
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/72c9013d-0bc1-465a-8912-0e356874a962/d99ovzj-7f90e1e5-94f6-45a2-ad9b-8d79e1e18627.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzcyYzkwMTNkLTBiYzEtNDY1YS04OTEyLTBlMzU2ODc0YTk2MlwvZDk5b3Z6ai03ZjkwZTFlNS05NGY2LTQ1YTItYWQ5Yi04ZDc5ZTFlMTg2MjcuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.kZtvn6rTF9rGgZZi_oexxjhU4v1LpYJvbsf8jP45QoI "
              alt="netflix-gif"
              className="h-[350px]"
            />
          </div>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        custom={4}
        variants={animation}
        viewport={{ once: true }}
      >
        <hr />
        <div className="flex flex-col justify-evenly items-center self-center md:flex-row md:items-center min-h-[460px] p-4 md:p-6">
          <div className="flex justify-center flex-row items-center self-center object-contain">
            <img
              src="https://occ-0-7319-1432.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABfpnX3dbgjZ-Je8Ax3xn0kXehZm_5L6-xe6YSTq_ucht9TI5jwDMqusWZKNYT8DfGudD0_wWVVTFLiN2_kaQJumz2iivUWbIbAtF.png?r=11f"
              alt=""
              className="h-[350px]"
            />
          </div>
          <div className="flex flex-col justify-center text-left items-center self-center text-white sm:mt-18 sm:w-full md:w-[480px]">
            <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold">
              Create profiles for children.
            </h1>
            <p className="text-xl  pt-5">
              Send children on adventures with their favourite characters in a
              space made just for them—free with your membership.
            </p>
          </div>
        </div>
      </motion.div>
      <hr />
      <Accordion />
      <hr />
      <Footer />
    </>
  )
}
