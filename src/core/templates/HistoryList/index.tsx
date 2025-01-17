import { ReactNode } from 'react'
import './styles.css'

interface HistoryListProps {
  children: ReactNode
}

export function HistoryList({ children }: HistoryListProps) {
  return (
    <section className='history-list'>
      {children}
    </section>
  )
}