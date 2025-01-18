import { createRoot } from 'react-dom/client'
import './core/css/index.css'
import { BrowserRouter } from 'react-router-dom'
import Router from './Router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </QueryClientProvider>
)
