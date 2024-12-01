import { IconProps } from './Icon'

const Shop = ({ color, size, ...otherProps }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...otherProps}>
    <path d="M21,10v10c0,1.1-0.9,2-2,2H5c-1.1,0-2-0.9-2-2V10" />
    <line x1="3" y1="1" x2="3" y2="5" />
    <line x1="9" y1="1" x2="9" y2="5" />
    <line x1="15" y1="1" x2="15" y2="5" />
    <line x1="21" y1="1" x2="21" y2="5" />
    <polyline points="9,22 9,12 15,12 15,22 " />
  </svg>
)

Shop.displayName = 'Shop'

export default Shop
