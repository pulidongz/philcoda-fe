import { Meta } from '@storybook/react'
import TileList from './TileList'

export default {
  title: 'Components/TileList',
  component: TileList,
  argTypes: {}
} as Meta<typeof TileList>

export const Example = () => {
  return (
    <TileList
      name="Countries"
      options={[
        { id: '1', label: 'Australia' },
        { id: '2', label: 'New Zealand' },
        { id: '3', label: 'Country', disabled: true }
      ]}
    />
  )
}
