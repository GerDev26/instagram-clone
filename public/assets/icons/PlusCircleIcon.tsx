import { PlusCircleIcon as IconOutlined } from '@heroicons/react/24/outline'
import { PlusCircleIcon as IconSolid } from '@heroicons/react/24/solid'
import { IconProps } from './IconProps'

export function PlusCircleIcon({ variant = 'outline'  } : IconProps){
  const icon = {
    outline: <IconOutlined />,
    solid: <IconSolid />
  }
  return icon[variant]
}