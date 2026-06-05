import { useState } from 'react'
import { motion } from 'framer-motion'
import AlertFilterCreator from '../components/Alerts/AlertFilterCreator'
import ActiveAlertCard from '../components/Alerts/ActiveAlertCard'
import { mockAlerts } from '../mockData'

const AlertsPage = () => {
  const [alerts, setAlerts] = useState(mockAlerts)

  const handleAddAlert = (newAlert) => {
    setAlerts([...alerts, { ...newAlert, id: Date.now().toString(), dailyCount: 0, active: true }])
  }

  const handleRemoveAlert = (id) => {
    setAlerts(alerts.filter(alert => alert.id !== id))
  }

  return (
    <div className="p-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto space-y-6"
          >
            <h1 className="text-2xl font-bold text-charcoal">Manage Alerts</h1>
            <AlertFilterCreator onAddAlert={handleAddAlert} />
            <div className="space-y-3">
              {alerts.map((alert) => (
                <ActiveAlertCard key={alert.id} alert={alert} onRemove={() => handleRemoveAlert(alert.id)} />
              ))}
              {alerts.length === 0 && (
                <div className="card p-8 text-center text-charcoal/60">
                  No active alerts. Create one above.
                </div>
              )}
            </div>
          </motion.div>
    </div>
  )
}

export default AlertsPage