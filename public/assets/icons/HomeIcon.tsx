import { HomeIcon as IconOutlined } from '@heroicons/react/24/outline'
import { HomeIcon as IconSolid } from '@heroicons/react/24/solid'
import { IconProps } from './IconProps'

export function HomeIcon({ variant = 'outline'  } : IconProps){
  const icon = {
    outline: <IconOutlined />,
    solid: <IconSolid />
  }
  return icon[variant]
}