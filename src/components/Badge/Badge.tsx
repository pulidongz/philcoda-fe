import React from 'react'
import classnames from 'classnames'

import Icon from '../Icon'
import { BadgeColor } from './BadgeColorEnum'
import kindToColorMapping from './kindToColorMapping'

export type BadgeKindOrderStatuses = 'draft' | 'posted' | 'backorder'
export type BadgeKindRequestStatuses = 'approved' | 'requested' | 'rejected' | 'removed' | 'declined' | 'pending'
export type BadgeKindProductLabels = 'new' | 'bestSeller' | 'special' | 'upcoming' | 'soldOut' | 'discontinued'
export type BadgeKindDefault = 'default' | 'info' | 'error' | 'warning' | 'success' | 'brand'
export type BadgeKindOther = 'currency'

import styles from './Badge.module.css'

export type BadgeProps = {
  name?: string
  children: React.ReactNode
  className?: string
  hasMargin?: boolean
  kind?: BadgeKindDefault | BadgeKindOther | BadgeKindOrderStatuses | BadgeKindRequestStatuses | BadgeKindProductLabels
  leadingIcon?: string
  leadingIconColor?: string
  color?: BadgeColor
  style?: 'round' | 'tinted' | 'solid'
  onDismissClick?: () => void
}

const Badge = ({
  children,
  className,
  hasMargin,
  kind = 'default',
  style = 'solid',
  leadingIcon,
  leadingIconColor,
  color,
  onDismissClick
}: BadgeProps) => {
  const badgeColor = color || kindToColorMapping[kind]
  return (
    <div className={classnames(styles.badge, className, [badgeColor], [style], { hasMargin })}>
      {leadingIcon && <Icon kind={leadingIcon} color={leadingIconColor} size={12} strokeWidth={3} />}
      <div className={classnames(styles.badgeLabel, { hasLeadingIcon: leadingIcon })}>{children}</div>
      {onDismissClick && <Icon kind="x" size={10} onClick={() => onDismissClick()} className="dismiss" />}
    </div>
  )
}

export default Badge
