import { motion } from 'framer-motion'
import IntegrationCard from '../components/Integrations/IntegrationCard'
import { mockIntegrations } from '../mockData'

const IntegrationsPage = () => {
  return (
    <div className="p-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto space-y-6"
          >
            <h1 className="text-2xl font-bold text-charcoal">Integrations</h1>
            <p className="text-charcoal/60">Connect your Discord bot and Telegram bot to receive job alerts instantly.</p>
            <div className="space-y-4">
              <IntegrationCard type="discord" data={mockIntegrations.discord} />
              <IntegrationCard type="telegram" data={mockIntegrations.telegram} />
            </div>
          </motion.div>
    </div>
  )
}

export default IntegrationsPage