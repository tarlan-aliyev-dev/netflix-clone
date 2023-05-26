import { motion } from 'framer-motion'

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: any) => {
    const delay = 1 + i * 0.5
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: 'spring', duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    }
  },
}

export default function AnimatedXButton() {
  return (
    <motion.svg
      width="600"
      height="600"
      viewBox="200 0 1500 500"
      initial="hidden"
      animate="visible"
    >
      <motion.line
        x1="220"
        y1="30"
        x2="360"
        y2="170"
        stroke="#A71919"
        stroke-width="20px"
        stroke-linecap="round"
        fill="transparent"
        variants={draw}
        custom={2}
      />
      <motion.line
        x1="220"
        y1="170"
        x2="360"
        y2="30"
        stroke="#A71919"
        stroke-width="20px"
        stroke-linecap="round"
        fill="transparent"
        variants={draw}
        custom={2.5}
      />
    </motion.svg>
  )
}
