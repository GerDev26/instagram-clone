import { FilmIcon as IconOutlined } from '@heroicons/react/24/outline'
import { FilmIcon as IconSolid } from '@heroicons/react/24/solid'
import { IconProps } from './IconProps'

export function FilmIcon({ variant = 'outline'  } : IconProps){
  const icon = {
    outline: <IconOutlined />,
    solid: <IconSolid />
  }
  return icon[variant]
}