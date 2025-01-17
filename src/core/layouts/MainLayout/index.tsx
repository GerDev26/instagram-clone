import { Link, Outlet } from 'react-router-dom'

import { 
  Bars3Icon as Bars3Outline, 
  CameraIcon as CameraOutline, 
  FilmIcon as FilmOutline,
  GlobeAmericasIcon as GlobeOutline, 
  HeartIcon as HeartOutline, 
  HomeIcon as HomeOutline, 
  MagnifyingGlassIcon as SearchOutline, 
  PaperAirplaneIcon as PaperOutline, 
  PlusCircleIcon as PlusOutline, 
  UserCircleIcon as UserOutline 
} from '@heroicons/react/24/outline'

import { 
  Bars3Icon as Bars3Solid, 
  CameraIcon as CameraSolid, 
  FilmIcon as FilmSolid,
  GlobeAmericasIcon as GlobeSolid, 
  HeartIcon as HeartSolid, 
  HomeIcon as HomeSolid, 
  MagnifyingGlassIcon as SearchSolid, 
  PaperAirplaneIcon as PaperSolid, 
  PlusCircleIcon as PlusSolid, 
  UserCircleIcon as UserSolid 
} from '@heroicons/react/24/solid'

import './styles.css'
import { ReactNode, useState } from 'react'

export function MainLayout() {

  const iconProps = {color: '#ffffff', width: 28}
  
  return (
    <section className="main-layout">
      <header className="header">
        <NavIcon 
          icon={<CameraOutline {...iconProps} />} 
          activeIcon={<CameraSolid {...iconProps} />} 
        />
        <nav className="navbar">
          <NavIcon 
            icon={<HomeOutline {...iconProps} />} 
            activeIcon={<HomeSolid {...iconProps} />} 
          />
          <NavIcon 
            icon={<SearchOutline {...iconProps} />} 
            activeIcon={<SearchSolid {...iconProps} />} 
          />
          <NavIcon 
            icon={<GlobeOutline {...iconProps} />} 
            activeIcon={<GlobeSolid {...iconProps} />} 
          />
          <NavIcon 
            icon={<FilmOutline {...iconProps} />} 
            activeIcon={<FilmSolid {...iconProps} />} 
          />
          <NavIcon 
            icon={<PaperOutline {...iconProps} />} 
            activeIcon={<PaperSolid {...iconProps} />} 
          />
          <NavIcon 
            icon={<HeartOutline {...iconProps} />} 
            activeIcon={<HeartSolid {...iconProps} />} 
          />
          <NavIcon 
            icon={<PlusOutline {...iconProps} />} 
            activeIcon={<PlusSolid {...iconProps} />} 
          />
          <NavIcon 
            icon={<UserOutline {...iconProps} />} 
            activeIcon={<UserSolid {...iconProps} />} 
          />
        </nav>
        <NavIcon 
          icon={<Bars3Outline {...iconProps} />} 
          activeIcon={<Bars3Solid {...iconProps} />} 
        />
      </header>
      <main className="content">
        <Outlet />
      </main>
    </section>
  )
}

interface NavIconProps {
  icon: ReactNode
  activeIcon: ReactNode
  text?: string,
  to?: string
}

function NavIcon({ icon, activeIcon, text, to}: NavIconProps) {
  const [isActive, setIsActive] = useState(false)
  console.log(text)
  return (
    <Link to={to || '#'} className="navigation-item" onClick={() => setIsActive(!isActive)}>
      {isActive ? activeIcon : icon}
    </Link>
  )
}