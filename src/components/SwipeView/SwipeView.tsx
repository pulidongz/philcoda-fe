import { ReactNode } from 'react'
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'

// import 'swiper/css'
// import 'swiper/css/navigation'
// import 'swiper/css/pagination'
// import 'swiper/css/scrollbar'
import classnames from 'classnames'

import styles from './SwipeView.module.css'

type SwipeViewProps = {
  className?: string
  children: ReactNode[]
  disabled?: boolean
} & SwiperProps

const SwipeView = ({
  className,
  children,
  disabled = false,
  modules = [Pagination],
  onReachBeginning,
  onReachEnd,

  ...props
}: SwipeViewProps) => {
  return (
    <Swiper
      className={classnames(styles.swiperContainer, className)}
      pagination={{
        dynamicBullets: true,
        clickable: true
      }}
      scrollbar={{
        enabled: true,
        hide: false,
        draggable: true
      }}
      onReachBeginning={onReachBeginning}
      onReachEnd={onReachEnd}
      modules={modules}
      enabled={!disabled}
      grabCursor
      {...props}>
      {children?.map((child: ReactNode, index: number) => {
        return <SwiperSlide key={index}>{child}</SwiperSlide>
      })}
    </Swiper>
  )
}

export default SwipeView
