import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Plus, X } from 'lucide-react'
import toast from 'react-hot-toast'

const alertSchema = z.object({
  keyword: z.string().min(2, 'Keyword is required'),
  location: z.string().optional(),
  channel: z.enum(['discord', 'telegram']),
  remoteOnly: z.boolean().default(false),
})

const AlertFilterCreator = ({ onAddAlert }) => {
  const [isOpen, setIsOpen] = useState(false)
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: zodResolver(alertSchema),
    defaultValues: { channel: 'discord', remoteOnly: false }
  })

  const onSubmit = (data) => {
    onAddAlert(data)
    toast.success('Alert created successfully')
    reset()
    setIsOpen(false)
  }

  return (
    <div className="card p-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-green-deep font-medium hover:text-green-dark transition-colors"
      >
        <Plus className="w-5 h-5" />
        {isOpen ? 'Cancel' : 'Create New Alert'}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.form
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            onSubmit={handleSubmit(onSubmit)}
            className="mt-4 space-y-4 overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  {...register('keyword')}
                  placeholder="Keyword (e.g., React Developer)"
                  className="input-field"
                />
                {errors.keyword && (
                  <p className="text-red-500 text-sm mt-1 animate-shake">{errors.keyword.message}</p>
                )}
              </div>

              <div>
                <input
                  {...register('location')}
                  placeholder="Location (optional)"
                  className="input-field"
                />
              </div>

              <div>
                <select {...register('channel')} className="input-field">
                  <option value="discord">Discord</option>
                  <option value="telegram">Telegram</option>
                </select>
              </div>

              <div className="flex items-center gap-2">
                <input type="checkbox" {...register('remoteOnly')} className="w-4 h-4 text-green-deep rounded focus:ring-green-sage" />
                <label className="text-sm text-charcoal">Remote only</label>
              </div>
            </div>

            <div className="flex justify-end">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="btn-primary"
              >
                Create Alert
              </motion.button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  )
}

export default AlertFilterCreator