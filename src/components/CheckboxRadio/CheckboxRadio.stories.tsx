import { useState } from 'react'
import { Meta } from '@storybook/react'

import CheckboxRadio from '../../components/CheckboxRadio'

export default {
  title: 'Components/CheckboxRadio',
  component: CheckboxRadio,
  argTypes: {}
} as Meta<typeof CheckboxRadio>

export const CheckboxDefault = () => {
  const [checked, setChecked] = useState(false)
  return <CheckboxRadio type="checkbox" onChange={() => setChecked(!checked)} checked={checked} name="thecheckbox" />
}

export const CheckboxWithLabel = () => {
  const [checked, setChecked] = useState(false)
  return (
    <CheckboxRadio
      type="checkbox"
      onChange={() => setChecked(!checked)}
      checked={checked}
      name="thecheckbox"
      label="this is the label"
    />
  )
}

export const Disabled = () => {
  const [checked, setChecked] = useState(false)
  return (
    <CheckboxRadio
      type="checkbox"
      onChange={() => setChecked(!checked)}
      checked={checked}
      name="thecheckbox"
      label="this is the label"
      disabled={true}
    />
  )
}

export const RadioDefault = () => {
  const [checked, setChecked] = useState(false)
  return <CheckboxRadio type="radio" onChange={() => setChecked(!checked)} checked={checked} name="theradio" />
}

export const RadioWithLabel = () => {
  const [selected, setSelected] = useState('')
  return (
    <>
      <CheckboxRadio
        type="radio"
        onChange={() => setSelected('option1')}
        checked={selected === 'option1'}
        name="theradio"
        label="option 1"
      />

      <CheckboxRadio
        type="radio"
        onChange={() => setSelected('option2')}
        checked={selected === 'option2'}
        name="theradio"
        label="option 2"
      />
    </>
  )
}
