import { motion } from 'framer-motion'
import { CheckCircle, XCircle, ExternalLink } from 'lucide-react'

const NotificationHistoryTable = ({ history }) => {
  return (
    <div className="card overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-cream-dark border-b border-border">
            <tr className="text-left text-sm font-medium text-charcoal/70">
              <th className="px-5 py-3">Job Title</th>
              <th className="px-5 py-3">Platform</th>
              <th className="px-5 py-3">Time</th>
              <th className="px-5 py-3">Status</th>
              <th className="px-5 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {history.map((item, idx) => (
              <motion.tr
                key={item.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ backgroundColor: '#F9F3E8' }}
                className="border-b border-border last:border-0 transition-colors"
              >
                <td className="px-5 py-3 font-medium text-charcoal">{item.jobTitle}</td>
                <td className="px-5 py-3 text-sm text-charcoal/60">{item.platform}</td>
                <td className="px-5 py-3 text-sm text-charcoal/60">
                  {new Date(item.timestamp).toLocaleString()}
                </td>
                <td className="px-5 py-3">
                  {item.status === 'delivered' ? (
                    <span className="flex items-center gap-1 text-green-deep text-sm">
                      <CheckCircle className="w-4 h-4" /> Delivered
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-red-500 text-sm">
                      <XCircle className="w-4 h-4" /> Failed
                    </span>
                  )}
                </td>
                <td className="px-5 py-3">
                  <button className="text-green-sage hover:text-green-deep transition-colors">
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default NotificationHistoryTable