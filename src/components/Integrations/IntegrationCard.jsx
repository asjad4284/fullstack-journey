import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, XCircle, Link, Copy } from 'lucide-react'
import toast from 'react-hot-toast'

const IntegrationCard = ({ type, data }) => {
  const [connected, setConnected] = useState(data.connected)
  const [token, setToken] = useState(data.token || '')

  const handleConnect = () => {
    if (!token) {
      toast.error(`Please enter your ${type} bot token`)
      return
    }
    setConnected(true)
    toast.success(`${type} connected successfully!`)
  }

  const handleDisconnect = () => {
    setConnected(false)
    setToken('')
    toast.success(`${type} disconnected`)
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(token)
    toast.success('Token copied')
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      className="card p-5 transition-all"
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="font-semibold text-lg text-charcoal capitalize">{type}</h3>
          <p className="text-sm text-charcoal/60">
            {connected ? 'Connected and active' : 'Not connected'}
          </p>
        </div>
        {connected ? (
          <CheckCircle className="w-6 h-6 text-green-deep" />
        ) : (
          <XCircle className="w-6 h-6 text-charcoal/30" />
        )}
      </div>

      {!connected ? (
        <div className="space-y-3">
          <input
            type="text"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            placeholder={`Enter your ${type} bot token`}
            className="input-field text-sm font-mono"
          />
          <button onClick={handleConnect} className="btn-primary w-full">
            <Link className="w-4 h-4 inline mr-2" />
            Connect
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          <div className="bg-cream-dark rounded-lg p-3 font-mono text-xs text-charcoal/80 break-all">
            {token}
          </div>
          <div className="flex gap-2">
            <button onClick={handleCopy} className="btn-secondary flex-1">
              <Copy className="w-4 h-4 inline mr-2" />
              Copy Token
            </button>
            <button onClick={handleDisconnect} className="btn-secondary border-red-300 text-red-600 hover:bg-red-50 flex-1">
              Disconnect
            </button>
          </div>
        </div>
      )}
    </motion.div>
  )
}

export default IntegrationCard