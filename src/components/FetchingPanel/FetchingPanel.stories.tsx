import { Meta } from '@storybook/react'

import FetchingPanel from '../../components/FetchingPanel'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Progress/FetchingPanel',
  component: FetchingPanel,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {}
} as Meta<typeof FetchingPanel>

export const Default = () => (
  <>
    <FetchingPanel />
  </>
)
