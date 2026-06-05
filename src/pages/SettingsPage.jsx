import { motion } from 'framer-motion'
import toast from 'react-hot-toast'

const SettingsPage = () => {
  const handleDeleteAccount = () => {
    if (window.confirm('Are you sure? This action cannot be undone.')) {
      toast.error('Account deletion simulation (backend required)')
    }
  }

  return (
    <div className="p-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto space-y-6"
          >
            <h1 className="text-2xl font-bold text-charcoal">Settings</h1>
            
            <div className="card p-6 space-y-4">
              <h2 className="text-lg font-semibold text-charcoal">Profile</h2>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-charcoal/70 mb-1">Email</label>
                  <input type="email" defaultValue="student@example.com" className="input-field" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal/70 mb-1">Password</label>
                  <input type="password" placeholder="••••••••" className="input-field" />
                </div>
                <button className="btn-primary">Update Profile</button>
              </div>
            </div>

            <div className="card p-6 space-y-4">
              <h2 className="text-lg font-semibold text-charcoal">Notification Preferences</h2>
              <div className="space-y-3">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 text-green-deep" defaultChecked />
                  <span className="text-sm text-charcoal">Enable quiet hours (10 PM – 8 AM)</span>
                </label>
                <div>
                  <label className="block text-sm font-medium text-charcoal/70 mb-1">Max alerts per day</label>
                  <select className="input-field">
                    <option>10</option>
                    <option>25</option>
                    <option>50</option>
                    <option>Unlimited</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="card p-6 border-red-200">
              <h2 className="text-lg font-semibold text-red-600 mb-2">Danger Zone</h2>
              <button onClick={handleDeleteAccount} className="btn-secondary border-red-300 text-red-600 hover:bg-red-50">
                Delete Account
              </button>
            </div>
          </motion.div>
    </div>
  )
}

export default SettingsPage