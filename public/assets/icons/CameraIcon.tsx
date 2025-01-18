import { CameraIcon as IconOutlined } from '@heroicons/react/24/outline'
import { CameraIcon as IconSolid } from '@heroicons/react/24/solid'
import { IconProps } from './IconProps'

export function CameraIcon({ variant = 'outline'  } : IconProps){
  const icon = {
    outline: <IconOutlined />,
    solid: <IconSolid />
  }
  return icon[variant]
}