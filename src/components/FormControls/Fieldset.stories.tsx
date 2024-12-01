import { Meta } from '@storybook/react'

import { Fieldset } from '../../components/FormControls'
import FormInput from '../../components/FormControls/FormInput'

export default {
  title: 'Components/Fieldset',
  component: Fieldset,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta<typeof Fieldset>

export const Default = () => (
  <Fieldset title="This is the fieldset title">
    <FormInput title="Name" field={{ name: 'name' }} type="text" />
    <FormInput title="Description" field={{ name: 'description' }} type="text" />
  </Fieldset>
)

export const WithSubtitle = () => (
  <Fieldset title="This is the fieldset title" subtitle="This is the fieldset subtitle">
    <FormInput title="Name" field={{ name: 'name' }} type="text" />
    <FormInput title="Description" field={{ name: 'description' }} type="text" />
  </Fieldset>
)
