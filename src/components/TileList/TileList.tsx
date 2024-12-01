import { MouseEventHandler, ReactNode } from 'react'
import classnames from 'classnames'

import CheckboxRadio from '../CheckboxRadio'
import { CheckboxKind } from '../CheckboxRadio/CheckboxRadio'

import styles from './TileList.module.css'

type TileListProps = {
  className?: string
  checkboxKind?: CheckboxKind
  checkboxLabelStyle?: string
  name: string
  options: {
    label: string
    id: string
    disabled?: boolean
    tileContent?: ReactNode
  }[]
  value?: string[]
  disabled?: boolean
  onChange?: (selectedItems: string[]) => void
  onClick?: MouseEventHandler<HTMLInputElement> | undefined
}

const TileList = ({
  className,
  checkboxKind = 'default',
  checkboxLabelStyle,
  name,
  options,
  value = [],
  disabled,
  onChange,
  onClick
}: TileListProps) => {
  return (
    <div className={classnames(styles.tileListContainer, className, { [styles.disabled]: disabled })}>
      {options.length > 0 &&
        options.map((option, index) => {
          return (
            <div key={index} className={classnames(styles.tile, { [styles.disabled]: disabled || option.disabled })}>
              <CheckboxRadio
                className={styles.checkbox}
                labelStyle={checkboxLabelStyle}
                kind={checkboxKind}
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

              {option.tileContent && (
                <div
                  className={classnames(styles.tileContent, {
                    [styles.disabled]: disabled || option.disabled
                  })}>
                  {option.tileContent}
                </div>
              )}
            </div>
          )
        })}
    </div>
  )
}

export default TileList
