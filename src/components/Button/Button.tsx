import React from 'react'
import classNames from 'classnames/bind'

import useForm from '../Form/useForm'
import Icon from '../Icon'
import ProgressSpinner from '../ProgressSpinner'

import styles from './Button.module.css'

export type ButtonProps = {
  id?: string
  children?: React.ReactNode
  className?: string
  disabled?: boolean
  active?: boolean
  icon?: string
  iconColor?: string
  iconPosition?: 'left' | 'right'
  iconSize?: number
  isBlock?: boolean
  isElastic?: boolean
  isJoinedLeft?: boolean
  isJoinedRight?: boolean
  isSubmitting?: boolean
  submittingText?: string | React.ReactNode
  kind?:
    | 'default'
    | 'brand'
    | 'primary'
    | 'positive'
    | 'reverse'
    | 'dark'
    | 'light'
    | 'transparent'
    | 'link'
    | 'danger'
    | 'warning'
    | 'dangerSecondary'
    | 'positiveSecondary'
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  size?: 'default' | 'mini' | 'large'
  type?: 'button' | 'submit' | 'reset'
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      id,
      children,
      className,
      disabled = false,
      active = false,
      icon,
      iconColor = 'currentColor',
      iconPosition = 'left',
      iconSize: iconCustomSize,
      isBlock = false,
      isElastic = false,
      isJoinedLeft = false,
      isJoinedRight = false,
      isSubmitting = false,
      submittingText,
      kind = 'default',
      onClick,
      size = 'default',
      type = 'button'
    },
    ref
  ) => {
    const hasIconLeft = icon && iconPosition === 'left'
    const hasIconRight = icon && iconPosition === 'right'
    const isIconOnly = icon && !children

    const cx = classNames.bind(styles)
    const classes = cx(
      styles.button,
      [kind, size],
      {
        isBlock,
        isElastic,
        isJoinedLeft,
        isJoinedRight,
        isSubmitting,
        hasIconLeft,
        hasIconRight,
        isIconOnly,
        active,
        hasSubmittingText: submittingText
      },
      className
    )

    const iconSize = iconCustomSize != null ? iconCustomSize : size === 'mini' ? 12 : 16
    const { disabled: formDisabled } = useForm()

    return (
      <button id={id} type={type} disabled={disabled || formDisabled} className={classes} onClick={onClick} ref={ref}>
        <div
          className={cx(styles.buttonInner, {
            [styles.hide]: isSubmitting
          })}>
          {hasIconLeft && <Icon className={styles.icon} kind={icon} color={iconColor} size={iconSize} />}
          {children && <div className={styles.label}>{children}</div>}
          {isSubmitting && submittingText && <div className={styles.label}>{submittingText}</div>}
          {hasIconRight && <Icon className={styles.icon} kind={icon} color={iconColor} size={iconSize} />}
        </div>

        {isSubmitting && (
          <>
            {submittingText && <div className={styles.submittingText}>{submittingText}</div>}
            <ProgressSpinner className={styles.progressSpinner} />
          </>
        )}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
