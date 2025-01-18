import { MagnifyingGlassIcon as IconOutlined } from '@heroicons/react/24/outline'
import { MagnifyingGlassIcon as IconSolid } from '@heroicons/react/24/solid'
import { IconProps } from './IconProps'

export function MagnifyingGlassIcon({ variant = 'outline'  } : IconProps){
  const icon = {
    outline: <IconOutlined />,
    solid: <IconSolid />
  }
  return icon[variant]
}