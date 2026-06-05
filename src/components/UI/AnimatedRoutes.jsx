import { Outlet } from 'react-router-dom'
import { motion } from 'framer-motion'

const AnimatedRoutes = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
      className="h-full"
    >
      <Outlet />
    </motion.div>
  )
}

export default AnimatedRoutes