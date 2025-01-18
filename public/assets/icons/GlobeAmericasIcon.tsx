import { GlobeAmericasIcon as IconOutlined } from '@heroicons/react/24/outline'
import { GlobeAmericasIcon as IconSolid } from '@heroicons/react/24/solid'
import { IconProps } from './IconProps'

export function GlobeAmericasIcon({ variant = 'outline'  } : IconProps){
  const icon = {
    outline: <IconOutlined />,
    solid: <IconSolid />
  }
  return icon[variant]
}