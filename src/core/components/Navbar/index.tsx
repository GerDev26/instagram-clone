import { NavIcon } from './NavIcon'

export function Navbar(){
  return (
    <nav className='navbar'>
      <NavIcon iconName='camera' />
      <div className="navbar-items">
        <NavIcon iconName='home' text='Inicio' />
        <NavIcon iconName='search' text='Buscar' />
        <NavIcon iconName='explore' text='Explorar' />
        <NavIcon iconName='reel' text='Reels' />
        <NavIcon iconName='message' text='Mensajes' />
        <NavIcon iconName='like' text='Notificaciones' />
        <NavIcon iconName='plus' text='Crear' />
        <NavIcon iconName='user' text='Perfil' />
      </div>
      <NavIcon iconName='menu' text='Más' />
    </nav>
  )
}