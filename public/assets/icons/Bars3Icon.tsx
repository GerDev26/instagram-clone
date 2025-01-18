import { Bars3Icon as IconOutlined } from '@heroicons/react/24/outline'
import { Bars3Icon as IconSolid } from '@heroicons/react/24/solid'
import { IconProps } from './IconProps'

export function Bars3Icon({ variant = 'outline' } : IconProps){
  const icon = {
    outline: <IconOutlined />,
    solid: <IconSolid />
  }
  return icon[variant]
}