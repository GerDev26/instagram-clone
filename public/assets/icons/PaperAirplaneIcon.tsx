import { PaperAirplaneIcon as IconOutlined } from '@heroicons/react/24/outline'
import { PaperAirplaneIcon as IconSolid } from '@heroicons/react/24/solid'
import { IconProps } from './IconProps'

export function PaperAirplaneIcon({ variant = 'outline'  } : IconProps){
  const icon = {
    outline: <IconOutlined />,
    solid: <IconSolid />
  }
  return icon[variant]
}