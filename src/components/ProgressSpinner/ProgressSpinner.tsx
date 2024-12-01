import classNames from 'classnames/bind'
import styles from './ProgressSpinner.module.css'

const cx = classNames.bind(styles)

const ProgressSpinner = ({ className }: { className?: string }) => {
  return (
    <svg viewBox="0 0 48 48" fill="currentColor" className={cx(styles.progressSpinner, className)}>
      <circle cx="12" cy="24" r="2" />
      <circle cx="24" cy="24" r="2" />
      <circle cx="36" cy="24" r="2" />
    </svg>
  )
}

export default ProgressSpinner
