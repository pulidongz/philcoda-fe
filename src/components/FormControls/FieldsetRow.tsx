import classnames from 'classnames'

import styles from './FieldsetRow.module.css'

export type FieldsetRowProps = {
  children?: React.ReactNode
  className?: string
}

export const FieldsetRow = ({ children, className }: FieldsetRowProps) => (
  <div className={classnames(styles.fieldsetRow, className)}>{children && children}</div>
)

type SpacerProps = {
  className?: string
}
export const Spacer = ({ className }: SpacerProps) => <div className={classnames(styles.spacer, className)} />

export default FieldsetRow
