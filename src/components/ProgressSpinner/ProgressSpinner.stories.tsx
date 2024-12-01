import { Meta } from '@storybook/react'

import ProgressSpinner from '../../components/ProgressSpinner'

import styles from './ProgressSpinner.stories.module.css'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Progress/ProgressSpinner',
  component: ProgressSpinner,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta<typeof ProgressSpinner>

export const Default = () => (
  <>
    <div className={styles.spinner}>
      <ProgressSpinner />
    </div>
  </>
)
