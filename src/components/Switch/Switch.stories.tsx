import { useState } from 'react'
import { Meta } from '@storybook/react'

import Switch from '../Switch'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Switch',
  component: Switch,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {}
} as Meta<typeof Switch>

export const Default = () => {
  const [checked, setChecked] = useState(false)
  return <Switch onChange={() => setChecked(!checked)} checked={checked} name="thecheckbox" />
}

export const WithLabel = () => {
  const [checked, setChecked] = useState(false)
  return <Switch onChange={() => setChecked(!checked)} checked={checked} name="thecheckbox" label="this is the label" />
}
