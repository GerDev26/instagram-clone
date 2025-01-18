import { 
  CameraIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  GlobeAmericasIcon,
  FilmIcon,
  PaperAirplaneIcon,
  HeartIcon,
  PlusCircleIcon,
  UserCircleIcon,
  Bars3Icon 
} from '../../../../public/assets/icons'

import { useState } from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

interface NavIconProps {
  iconName: 'camera' | 'home' | 'search' | 'explore' | 'reel' | 'message' | 'like' | 'plus' | 'user' | 'menu'
  to?: string
  text?: string
}

export function NavIcon({ iconName, text = 'Ejemplo', to}: NavIconProps) {
  const [isActive, setIsActive] = useState(false)

  const variant = isActive ? 'solid' : 'outline'

  const icons = {
    camera: <CameraIcon variant={variant} />,
    home: <HomeIcon variant={variant} />,
    search: <MagnifyingGlassIcon variant={variant} />,
    explore: <GlobeAmericasIcon variant={variant} />,
    reel: <FilmIcon variant={variant} />,
    message: <PaperAirplaneIcon variant={variant} />,
    like: <HeartIcon variant={variant} />,
    plus: <PlusCircleIcon variant={variant} />,
    user: <UserCircleIcon variant={variant} />,
    menu: <Bars3Icon variant={variant} />
  }

  const fontStyle = isActive ? { fontWeight: 'bold' } : {}

  if(to) {
    return (
      <Link to={to} className="navigation-item" onClick={() => setIsActive(!isActive)}>
        {icons[iconName]}
      </Link>
    )
  }
  return (
    <button className="navigation-item" onClick={() => setIsActive(!isActive)}>
      {icons[iconName]}
      <p style={fontStyle}>{text}</p>
    </button>
  )
}