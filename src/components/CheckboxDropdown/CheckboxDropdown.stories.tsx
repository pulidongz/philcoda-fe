import { Meta } from '@storybook/react'

import CheckboxDropdown from '../../components/CheckboxDropdown/CheckboxDropdown'

export default {
  title: 'Components/CheckboxDropdown',
  component: CheckboxDropdown,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta<typeof CheckboxDropdown>

const colourOptions = [
  { value: 'ocean1', label: 'Ocean' },
  { value: 'blue', label: 'Blue' },
  { value: 'purple', label: 'Purple' },
  { value: 'red', label: 'Red' },
  { value: 'orange', label: 'Orange' },
  { value: 'yellow', label: 'Yellow' },
  { value: 'green', label: 'Green' },
  { value: 'forest', label: 'Forest' },
  { value: 'slate', label: 'Slate' },
  { value: 'silver', label: 'Silver' }
]

export const Example = () => (
  <>
    <CheckboxDropdown title="Color" options={colourOptions} kind="default" />

    <br />

    <CheckboxDropdown title="Color" options={colourOptions} kind="light" isSingleChoice />
  </>
)
