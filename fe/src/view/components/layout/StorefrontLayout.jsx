import { Outlet } from 'react-router-dom'
import TopBar from './TopBar'
import Header from './Header'
import Footer from './Footer'

/**
 * Layout wrapper for all storefront (customer-facing) pages.
 * Renders TopBar, Header, main page content via <Outlet />, and Footer.
 */
export default function StorefrontLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f5faff]">
      <TopBar />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
