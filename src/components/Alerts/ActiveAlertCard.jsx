import { motion } from 'framer-motion'

const ActiveAlertCard = ({ alert, onRemove }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, x: -30, transition: { duration: 0.2 } }}
      whileHover={{ y: -5, boxShadow: '0 20px 30px -12px rgba(0,0,0,0.15)' }}
      className="card p-4 transition-all duration-200 cursor-default"
    >
      {/* existing content */}
    </motion.div>
  )
}