import { Suspense } from 'react'
import Providers from './providers'
import AppRouter from './router'

export default function App() {
  return (
    <Providers>
      <Suspense
        fallback={
          <div className="flex items-center justify-center h-screen text-warm-gray">
            Đang tải...
          </div>
        }
      >
        <AppRouter />
      </Suspense>
    </Providers>
  )
}
