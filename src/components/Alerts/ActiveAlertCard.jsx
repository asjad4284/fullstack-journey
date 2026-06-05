import { motion } from 'framer-motion'
import { X, Clock } from 'lucide-react'

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
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h3 className="font-semibold text-charcoal text-lg">{alert.keyword}</h3>
          <p className="text-charcoal/60 text-sm">{alert.location}</p>
        </div>
        <button
          onClick={() => onRemove()}
          className="p-1 hover:bg-red-50 rounded-lg transition-colors"
        >
          <X className="w-4 h-4 text-red-500" />
        </button>
      </div>
      
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-sm">
          <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
            {alert.channel}
          </span>
          <span className="text-green-deep font-semibold">{alert.dailyCount} today</span>
        </div>
        <div className="flex items-center gap-1 text-charcoal/60 text-xs">
          <Clock className="w-3 h-3" />
          <span>Last updated 2m ago</span>
        </div>
      </div>
    </motion.div>
  )
}

export default ActiveAlertCard