import { UserCircleIcon as IconOutlined } from '@heroicons/react/24/outline'
import { UserCircleIcon as IconSolid } from '@heroicons/react/24/solid'
import { IconProps } from './IconProps'

export function UserCircleIcon({ variant = 'outline'  } : IconProps){
  const icon = {
    outline: <IconOutlined />,
    solid: <IconSolid />
  }
  return icon[variant]
}