type Props = {
  className?: string
}

const CatalogCurrency = ({ className }: Props) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={className}>
    <path
      d="M14.6667 7.38668V8.00001C14.6659 9.43763 14.2003 10.8365 13.3396 11.9879C12.4788 13.1393 11.2689 13.9817 9.89025 14.3893C8.51163 14.7969 7.03818 14.7479 5.68966 14.2497C4.34113 13.7515 3.18978 12.8307 2.40732 11.6247C1.62485 10.4187 1.2532 8.99205 1.34779 7.55755C1.44239 6.12306 1.99815 4.75756 2.9322 3.66473C3.86625 2.57189 5.12853 1.81027 6.5308 1.49344C7.93307 1.17662 9.40019 1.32157 10.7133 1.90668"
      stroke="#87C289"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.6667 2.66669L8 9.34002L6 7.34002"
      stroke="#87C289"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default CatalogCurrency
