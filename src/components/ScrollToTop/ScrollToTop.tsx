import { useEffect, useState } from 'react'
import classnames from 'classnames'

import Button from '../Button'

import styles from './ScrollToTop.module.css'

export type ScrollToTopProps = {
  children?: string | React.ReactNode
  className?: string
  minScrollAmount?: number
  kind?: 'default' | 'link'
  iconPosition?: 'left' | 'right'
}

const ScrollToTop = ({
  children,
  className,
  minScrollAmount = 400,
  kind = 'default',
  iconPosition = 'right'
}: ScrollToTopProps) => {
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > minScrollAmount) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    })
  }, [minScrollAmount])

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      {showButton && (
        <div className={classnames(styles.backToTopContainer, className)}>
          <Button kind={kind} icon="arrow-up" iconPosition={iconPosition} onClick={goToTop}>
            {children || 'Back to Top'}
          </Button>
        </div>
      )}
    </>
  )
}

export default ScrollToTop
