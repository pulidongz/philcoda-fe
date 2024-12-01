import { MouseEventHandler, ChangeEventHandler } from 'react'
import classnames from 'classnames'
import styles from './Switch.module.css'

type SwitchProps = {
  className?: string
  label?: string | React.ReactNode
  onClick?: MouseEventHandler<HTMLLabelElement> | undefined
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined
  disabled?: boolean
  checked?: boolean
  id?: string
  name: string
}

{
  /* NOTE: switch needs a 'name' or it will not work! */
}
const Switch = ({ className, label, onClick, onChange, disabled = false, checked = false, id, name }: SwitchProps) => (
  <div className={classnames(styles.switchContainer, { [styles.isDisabled]: disabled }, className)}>
    {label && (
      <label htmlFor={id || name} className={styles.switchLabel}>
        {label}
      </label>
    )}
    <div className={styles.switchWrapper}>
      <input
        type={'checkbox'}
        id={id || name || ''}
        name={name}
        value={1}
        disabled={disabled}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={id || name} onClick={onClick} className={styles.switch}></label>
    </div>
  </div>
)

export default Switch
