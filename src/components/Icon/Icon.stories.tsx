import { Meta } from '@storybook/react'

import Icon from '../Icon'
import { iconsIndexed } from './iconsIndexed'
import styles from './Icon.stories.module.css'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Icon',
  component: Icon
} as Meta<typeof Icon>

const colors = [
  'var(--colorRed8)',
  'var(--colorBlue8)',
  'var(--colorYellow8)',
  'var(--colorGreen8)',
  'var(--colorPurple8)'
]

export const Icons = () => (
  <>
    <div className={styles.iconSection}>
      <div className={styles.heading}>Default (size 24)</div>
      <div className={styles.iconRow}>
        {Object.entries(iconsIndexed).map(i => {
          const randomColor = colors[Math.floor(Math.random() * colors.length)]
          return (
            <div className={styles.iconWrapper} key={i[0]}>
              <Icon kind={i[0]} color={randomColor} />
              <div className={styles.iconName}>{i[0]}</div>
            </div>
          )
        })}
      </div>
    </div>

    <div className={styles.iconSection}>
      <div className={styles.heading}>Size 16</div>
      <div className={styles.iconRow}>
        {Object.entries(iconsIndexed).map(i => (
          <div className={styles.iconWrapper} key={i[0]}>
            <Icon kind={i[0]} size={16} />
            <div className={styles.iconName}>{i[0]}</div>
          </div>
        ))}
      </div>
    </div>

    <div className={styles.iconSection}>
      <div className={styles.heading}>Size 10</div>
      <div className={styles.iconRow}>
        {Object.entries(iconsIndexed).map(i => (
          <div className={styles.iconWrapper} key={i[0]}>
            <Icon kind={i[0]} size={10} />
            <div className={styles.iconName}>{i[0]}</div>
          </div>
        ))}
      </div>
    </div>
  </>
)
