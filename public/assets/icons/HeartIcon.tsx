import { HeartIcon as IconOutlined } from '@heroicons/react/24/outline'
import { HeartIcon as IconSolid } from '@heroicons/react/24/solid'
import { IconProps } from './IconProps'

export function HeartIcon({ variant = 'outline'  } : IconProps){
  const icon = {
    outline: <IconOutlined />,
    solid: <IconSolid />
  }
  return icon[variant]
}