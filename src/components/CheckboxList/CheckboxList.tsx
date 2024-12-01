import { MouseEventHandler } from 'react'
import classnames from 'classnames'
import CheckboxRadio from '../CheckboxRadio'
import styles from './CheckboxList.module.css'

interface CheckboxListProps {
  name: string
  options: {
    label: string
    id: string
    disabled?: boolean
  }[]
  value?: string[]
  disabled?: boolean
  className?: string
  numColumns?: number
  onChange?: (selectedItems: string[]) => void
  onClick?: MouseEventHandler<HTMLInputElement> | undefined
}

const CheckboxList = ({
  name,
  options,
  onChange,
  disabled,
  className,
  value = [],
  numColumns = 3,
  onClick
}: CheckboxListProps) => {
  return (
    <div
      className={classnames(styles.checkboxListContainer, className)}
      style={{ gridTemplateColumns: `repeat(${numColumns}, ${100 / numColumns}%)` }}>
      {options.length > 0 &&
        options.map((option, index) => {
          return (
            <div key={index} className={styles.checkbox}>
              <CheckboxRadio
                type="checkbox"
                name={name}
                label={option.label}
                onChange={() => {
                  if (value.includes(option.id)) {
                    value = value.filter(selectedOption => selectedOption != option.id)
                  } else {
                    value = [...value, option.id]
                  }
                  if (onChange) onChange(value)
                }}
                onClick={e => {
                  if (onClick) onClick({ ...e, ...option })
                }}
                checked={value.includes(option.id)}
                disabled={disabled || option.disabled}
              />
            </div>
          )
        })}
    </div>
  )
}

export default CheckboxList
