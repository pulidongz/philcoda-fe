import { useState, useCallback, useRef } from 'react'
import useOnClickOutside from 'use-onclickoutside'
import classnames from 'classnames'

import Icon from '../Icon'
import { TooltipPosition } from './TooltipPositionEnum'

import styles from './Tooltip.module.css'

const cx = classnames.bind(styles)

export type TooltipProps = {
  children: React.ReactNode
  className?: string
  position?: TooltipPosition
  isOpen?: boolean
  iconSize?: number
  target?: React.ReactNode
  title?: string | React.ReactNode
  dismissable?: boolean
  onDismiss?: () => void
  keepOpenOnClick?: boolean
}

const Tooltip = ({
  children,
  className,
  position = TooltipPosition.TOP,
  isOpen = false,
  iconSize = 18,
  title,
  target,
  onDismiss = () => undefined,
  dismissable = false,
  keepOpenOnClick = false
}: TooltipProps) => {
  const ref = useRef(null)
  useOnClickOutside(ref, () => setKeepOpen(false))

  const [isHovered, setIsHovered] = useState(false)
  const [isDismissed, setIsDismissed] = useState(!isOpen)
  const [keepOpen, setKeepOpen] = useState(false)
  const isVisible = isHovered || (isOpen && !isDismissed) || keepOpen
  const top = position == TooltipPosition.TOP
  const bottom = position == TooltipPosition.BOTTOM

  const onDismissClick = useCallback(() => {
    setIsDismissed(true)
    onDismiss?.()
  }, [onDismiss])

  const handleKeepOpenOnClick = () => {
    if (keepOpenOnClick) {
      setKeepOpen(prevState => !prevState)
    }
  }

  return (
    <div className={styles.tooltipContainer} ref={ref}>
      <div
        className={cx(
          styles.tooltipBox,
          { [styles.visible]: isVisible, [styles.top]: top, [styles.bottom]: bottom },
          className
        )}>
        {(title || dismissable) && (
          <div className={styles.heading}>
            {title && <div className={styles.title}>{title}</div>}
            {dismissable && !isDismissed && (
              <Icon kind="x" size={18} onClick={() => onDismissClick()} className={styles.dismiss} />
            )}
          </div>
        )}
        <div className={styles.content}>{children}</div>
      </div>
      <div
        className={styles.iconContainer}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleKeepOpenOnClick}>
        {!target && (
          <Icon kind="help-circle" size={iconSize} color={isVisible ? '#76A9FF' : '#B8B8B8'} className={styles.icon} />
        )}
        {target && target}
      </div>
    </div>
  )
}

export default Tooltip
