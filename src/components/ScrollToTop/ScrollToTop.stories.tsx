import { Meta } from '@storybook/react'

import Icon from '../Icon'
import ScrollToTop from '../ScrollToTop'
import { iconsIndexed } from '../Icon/iconsIndexed'

import styles from './ScrollToTop.stories.module.css'

export default {
  title: 'Components/ScrollToTop',
  component: ScrollToTop,
  argTypes: {}
} as Meta<typeof ScrollToTop>

export const Example = () => (
  <>
    <div className={styles.exampleContainer}>
      <div className={styles.heading}>
        Scroll to the bottom of the list, to see the <code>&lt;ScrollToTop /&gt;</code> component in action
      </div>

      {Object.entries(iconsIndexed).map(i => (
        <div className={styles.iconWrapper} key={i[0]}>
          <Icon kind={i[0]} size={16} />
          <div className={styles.iconName}>{i[0]}</div>
        </div>
      ))}

      <ScrollToTop />
    </div>
  </>
)
