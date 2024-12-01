import { Meta } from '@storybook/react'

import CheckboxList from '../../components/CheckboxList'

export default {
  title: 'Components/CheckboxList',
  component: CheckboxList,
  argTypes: {}
} as Meta<typeof CheckboxList>

export const CheckboxListDefault = () => {
  return (
    <CheckboxList
      name="brandValuesField"
      options={[
        { id: '1', label: 'Animal Friendly' },
        { id: '2', label: 'Australian Designed' },
        { id: '3', label: 'Australian Made' },
        { id: '4', label: 'Fair Trade' },
        { id: '5', label: 'Handmade' },
        { id: '6', label: 'Indigenous Owned' },
        { id: '7', label: 'Natural' },
        { id: '8', label: 'New Zealand Designed' },
        { id: '9', label: 'New Zealand Made' },
        { id: '10', label: 'Organic' },
        { id: '11', label: 'Sustainable' },
        { id: '12', label: 'Women Owned', disabled: true }
      ]}
    />
  )
}
