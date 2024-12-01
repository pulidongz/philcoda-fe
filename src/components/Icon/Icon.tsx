import { iconsIndexed } from './iconsIndexed'

export type IconProps = {
  className?: string
  kind?: string
  color?: string
  fillColor?: string
  size?: number
  strokeWidth?: number
  onClick?: () => void
}

const Icon = ({
  className,
  kind = 'feather',
  fillColor = 'none',
  color = fillColor !== 'none' ? 'white' : 'currentColor',
  size = 24,
  strokeWidth = 2,
  onClick
}: IconProps) => {
  const IconComponent = iconsIndexed[kind as keyof typeof iconsIndexed]
  if (IconComponent)
    return (
      <IconComponent
        className={className}
        color={color}
        fill={fillColor}
        size={size}
        onClick={onClick}
        strokeWidth={strokeWidth}
      />
    )
  else return <></>
}

export default Icon
