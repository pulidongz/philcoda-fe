import classnames from 'classnames'

import ProgressSpinner from '../ProgressSpinner'
import styles from './FetchingPanel.module.css'

type FetchingPanelProps = {
  label?: string
  inline?: boolean
}

const FetchingPanel = ({ label, inline = false }: FetchingPanelProps) => (
  <div className={classnames(styles.container, { [styles.inline]: inline })} id="fetchingPanel">
    <ProgressSpinner className={styles.spinner} />
    {label && <p>{label}</p>}
  </div>
)

export default FetchingPanel
