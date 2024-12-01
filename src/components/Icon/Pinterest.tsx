import { IconProps } from './Icon'

const Pinterest = ({ color, size, ...otherProps }: IconProps) => (
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
    <path d="M8.85,23a1.84,1.84,0,0,1-.33,0,1.66,1.66,0,0,1-1-.7A1.62,1.62,0,0,1,7.24,21L9.67,8.81a1.64,1.64,0,0,1,1.61-1.32l.32,0a1.64,1.64,0,0,1,1.28,1.93l-.81,4.1a.35.35,0,0,0,.39.41h0a5,5,0,0,0,4.32-4A4.86,4.86,0,0,0,7.61,7a6.12,6.12,0,0,0-.47,2.25,1.64,1.64,0,0,1-3.27-.14A8.13,8.13,0,1,1,12,17.25a.87.87,0,0,0-.8.66l-.75,3.77A1.64,1.64,0,0,1,8.85,23Z" />
  </svg>
)

Pinterest.displayName = 'Pinterest'

export default Pinterest
