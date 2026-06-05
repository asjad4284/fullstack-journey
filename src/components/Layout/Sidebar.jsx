import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Bell, 
  MessageCircle, 
  History, 
  Settings,
  Terminal
} from 'lucide-react'

const navItems = [
  { path: '/alerts', label: 'Alerts', icon: Bell },
  { path: '/integrations', label: 'Integrations', icon: MessageCircle },
  { path: '/history', label: 'History', icon: History },
  { path: '/settings', label: 'Settings', icon: Settings },
]

const Sidebar = () => {
  return (
    <motion.aside 
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="fixed left-0 top-0 h-full w-64 bg-cream-light border-r border-border shadow-sm z-20"
    >
      <div className="flex flex-col h-full">
        {/* Logo */}
        <div className="p-6 border-b border-border">
          <div className="flex items-center gap-2">
            <Terminal className="w-6 h-6 text-green-deep" />
            <span className="font-bold text-xl text-charcoal">JobAlert</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all duration-200 ${
                  isActive
                    ? 'bg-green-deep text-white shadow-sm'
                    : 'text-charcoal hover:bg-cream-dark'
                }`
              }
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </NavLink>
          ))}
        </nav>

        {/* User footer */}
        <div className="p-4 border-t border-border">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-green-sage flex items-center justify-center text-white font-semibold">
              JD
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-charcoal">John Doe</p>
              <p className="text-xs text-green-deep">Student Plan</p>
            </div>
          </div>
        </div>
      </div>
    </motion.aside>
  )
}

export default Sidebar