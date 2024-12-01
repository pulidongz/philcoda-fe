import { Meta } from '@storybook/react'

import { Fieldset, FieldsetRow } from '../FormControls'
import { Spacer } from '../FormControls/FieldsetRow'
import FormInput from '../FormControls/FormInput'

export default {
  title: 'Components/FieldsetRow',
  component: Fieldset
} as Meta<typeof FieldsetRow>

export const Default = () => (
  <Fieldset title="This is the fieldset title">
    <FieldsetRow>
      <FormInput title="Name" field={{ name: 'name' }} type="text" />
      <FormInput title="Description" field={{ name: 'description' }} type="text" />
      <Spacer />
    </FieldsetRow>
  </Fieldset>
)
