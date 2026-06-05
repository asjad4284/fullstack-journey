import Sidebar from './Sidebar'
import TopNav from './TopNav'

export default function Layout({ children }) {
  return (
    <div className="flex h-screen bg-cream">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopNav />
        <main className="flex-1 overflow-auto bg-cream">
          {children}
        </main>
      </div>
    </div>
  )
}
