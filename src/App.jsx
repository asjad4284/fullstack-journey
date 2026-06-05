import { Routes, Route, Navigate } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useAuth } from './context/AuthContext'
import Layout from './components/Layout/Layout'
import AnimatedRoutes from './components/UI/AnimatedRoutes'
import Background3D from './components/UI/Background3D'
import Auth from './pages/Auth'
import Dashboard from './pages/Dashboard'
import AlertsPage from './pages/AlertsPage'
import IntegrationsPage from './pages/IntegrationsPage'
import HistoryPage from './pages/HistoryPage'
import SettingsPage from './pages/SettingsPage'

function App() {
  const { user, loading } = useAuth()

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream relative z-10">
        <div className="w-12 h-12 border-4 border-green-sage border-t-green-deep rounded-full animate-spin"></div>
      </div>
    )
  }

  return (
    <>
      <Background3D />
      <div className="relative z-10">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/auth" element={!user ? <Auth /> : <Navigate to="/dashboard" />} />
            <Route path="/" element={<Navigate to={user ? "/dashboard" : "/auth"} />} />
            
            {user ? (
              <Route element={<Layout><AnimatedRoutes /></Layout>}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/alerts" element={<AlertsPage />} />
                <Route path="/integrations" element={<IntegrationsPage />} />
                <Route path="/history" element={<HistoryPage />} />
                <Route path="/settings" element={<SettingsPage />} />
              </Route>
            ) : null}
            
            <Route path="*" element={<Navigate to={user ? "/dashboard" : "/auth"} />} />
          </Routes>
        </AnimatePresence>
      </div>
    </>
  )
}

export default App