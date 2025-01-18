import { Outlet } from 'react-router-dom'
import { Navbar } from '../../components/Navbar'
import './styles.css'

export function MainLayout() {
  return (
    <section className="main-layout">
      <header className="header">
        <Navbar />
      </header>
      <main className="content">
        <Outlet />
      </main>
    </section>
  )
}