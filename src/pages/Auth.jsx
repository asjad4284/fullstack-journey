import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import toast from 'react-hot-toast'
import { useAuth } from '../context/AuthContext'
import { Terminal } from 'lucide-react'

const authSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  name: z.string().optional(),
})

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true)
  const { login, signup } = useAuth()
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(authSchema),
  })

  const onSubmit = async (data) => {
    try {
      if (isLogin) {
        await login(data.email, data.password)
        toast.success('Welcome back!')
      } else {
        await signup(data.email, data.password, data.name)
        toast.success('Account created successfully!')
      }
    } catch (error) {
      toast.error('Authentication failed')
    }
  }

  return (
    <div className="min-h-screen flex">
      {/* Left side - Illustration */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-cream-dark to-cream relative overflow-hidden"
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center max-w-md px-8">
            <Terminal className="w-16 h-16 text-green-deep mx-auto mb-6" />
            <h1 className="text-4xl font-bold text-charcoal mb-4">Instant Job Alerts</h1>
            <p className="text-charcoal/70">Get real-time notifications on Discord & Telegram</p>
          </div>
        </div>
        {/* Animated background waves */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-green-sage/10 to-transparent" />
      </motion.div>

      {/* Right side - Form */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="w-full lg:w-1/2 flex items-center justify-center p-8"
      >
        <div className="w-full max-w-md">
          <div className="card p-8">
            <h2 className="text-2xl font-bold text-charcoal mb-2">
              {isLogin ? 'Welcome back' : 'Create an account'}
            </h2>
            <p className="text-charcoal/60 mb-6">
              {isLogin ? 'Sign in to manage your alerts' : 'Start tracking jobs instantly'}
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {!isLogin && (
                <div>
                  <input
                    {...register('name')}
                    type="text"
                    placeholder="Full name"
                    className="input-field"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1 animate-shake">{errors.name.message}</p>
                  )}
                </div>
              )}

              <div>
                <input
                  {...register('email')}
                  type="email"
                  placeholder="Email address"
                  className="input-field"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1 animate-shake">{errors.email.message}</p>
                )}
              </div>

              <div>
                <input
                  {...register('password')}
                  type="password"
                  placeholder="Password"
                  className="input-field"
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1 animate-shake">{errors.password.message}</p>
                )}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="btn-primary w-full"
              >
                {isLogin ? 'Sign In' : 'Sign Up'}
              </motion.button>
            </form>

            <p className="text-center text-sm text-charcoal/60 mt-6">
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-green-deep font-medium hover:underline"
              >
                {isLogin ? 'Sign up' : 'Sign in'}
              </button>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Auth