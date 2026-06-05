import { Menu } from 'lucide-react'

const TopNav = () => {
  return (
    <header className="bg-cream-light/80 backdrop-blur-sm border-b border-border px-6 py-3">
      <div className="flex items-center justify-between">
        <div className="flex-1" />
        <div className="flex items-center gap-3">
          <div className="text-sm text-green-deep font-medium">🚀 12 alerts today</div>
        </div>
      </div>
    </header>
  )
}

export default TopNav