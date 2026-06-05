import { Menu } from 'lucide-react'

const TopNav = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <header className="fixed top-0 right-0 left-64 bg-cream-light/80 backdrop-blur-sm border-b border-border z-10 px-6 py-3">
      <div className="flex items-center justify-between">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="lg:hidden p-2 rounded-lg hover:bg-cream-dark transition-colors"
        >
          <Menu className="w-5 h-5 text-charcoal" />
        </button>
        <div className="flex-1" />
        <div className="flex items-center gap-3">
          <div className="text-sm text-green-deep font-medium">🚀 12 alerts today</div>
        </div>
      </div>
    </header>
  )
}

export default TopNav