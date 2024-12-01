import { MouseEventHandler, ChangeEventHandler } from 'react'
import classnames from 'classnames'

import styles from './CheckboxRadio.module.css'

export type CheckboxKind = 'primary' | 'default' | 'light'

type CheckboxRadioProps = {
  className?: string
  labelStyle?: string
  type: 'checkbox' | 'radio'
  kind?: CheckboxKind
  id?: string
  name: string
  label?: string | React.ReactNode
  value?: string
  disabled?: boolean
  checked?: boolean
  onClick?: MouseEventHandler<HTMLInputElement> | undefined
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined
}

const CheckboxRadio = ({
  className,
  labelStyle,
  type,
  kind = 'default',
  id,
  name,
  disabled = false,
  checked = false,
  onClick,
  onChange,
  value,
  label
}: CheckboxRadioProps) => (
  <label
    className={classnames(
      styles.checkRadioLabel,

      {
        [styles[kind]]: true,
        [styles[type]]: true
      },

      className
    )}>
    <input
      className={styles.checkRadioInput}
      type={type}
      id={id || name || ''}
      name={name}
      disabled={disabled}
      checked={checked}
      value={value}
      onClick={onClick}
      onChange={onChange}
    />
    <div className={classnames(styles.checkRadioLabelInner, disabled && styles.disabledCheckRadioLabel, labelStyle)}>
      {label && label}
    </div>
  </label>
)

export default CheckboxRadio
