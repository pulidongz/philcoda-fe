type Props = {
  className?: string
}

const Search = ({ className }: Props) => (
  <svg width="20" height="20" viewBox="0 0 20 20" className={className}>
    <circle
      r="4"
      transform="matrix(0.707106 0.707107 -0.707106 0.707107 6.36401 6.36397)"
      stroke="#D5D7D9"
      fill="white"
    />
    <line x1="8.83891" y1="8.83883" x2="14.4958" y2="14.4957" stroke="#D5D7D9" />
  </svg>
)

export default Search
