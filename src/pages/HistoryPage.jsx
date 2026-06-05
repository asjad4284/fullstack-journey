import { motion } from 'framer-motion'
import NotificationHistoryTable from '../components/History/NotificationHistoryTable'
import { mockHistory } from '../mockData'

const HistoryPage = () => {
  return (
    <div className="p-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-5xl mx-auto space-y-6"
          >
            <h1 className="text-2xl font-bold text-charcoal">Notification History</h1>
            <NotificationHistoryTable history={mockHistory} />
          </motion.div>
    </div>
  )
}

export default HistoryPage