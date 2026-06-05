import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, AlertCircle, CheckCircle } from 'lucide-react'
import { mockAlerts } from '../mockData'
import ActiveAlertCard from '../components/Alerts/ActiveAlertCard'

const Dashboard = () => {
  const [alerts, setAlerts] = useState([])
  const [stats, setStats] = useState({
    totalAlerts: 0,
    activeAlerts: 0,
    jobsFound: 0,
  })

  useEffect(() => {
    setAlerts(mockAlerts.slice(0, 3))
    setStats({
      totalAlerts: mockAlerts.length,
      activeAlerts: mockAlerts.filter(a => a.active).length,
      jobsFound: 42,
    })
  }, [])

  const handleRemoveAlert = (id) => {
    setAlerts(alerts.filter(alert => alert.id !== id))
  }

  return (
    <div className="p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl space-y-8"
      >
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold text-charcoal mb-2">Dashboard</h1>
          <p className="text-charcoal/60">Welcome back! Here's your job alerts overview.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { label: 'Total Alerts', value: stats.totalAlerts, icon: AlertCircle, color: 'green-deep' },
            { label: 'Active Alerts', value: stats.activeAlerts, icon: CheckCircle, color: 'green-sage' },
            { label: 'Jobs Found', value: stats.jobsFound, icon: TrendingUp, color: 'charcoal' },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="card p-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-charcoal/60 text-sm mb-2">{stat.label}</p>
                  <p className="text-3xl font-bold text-charcoal">{stat.value}</p>
                </div>
                <stat.icon className={`w-8 h-8 text-${stat.color}`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Recent Alerts */}
        <div>
          <h2 className="text-2xl font-bold text-charcoal mb-4">Active Alerts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {alerts.map((alert, idx) => (
              <motion.div
                key={alert.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
              >
                <ActiveAlertCard alert={alert} onRemove={() => handleRemoveAlert(alert.id)} />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Dashboard