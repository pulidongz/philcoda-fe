import { useState } from 'react'
import { StoryFn, Meta } from '@storybook/react'
import DropdownSelect from './DropdownSelect'

import styles from './DropdownSelect.stories.module.css'

export default {
  title: 'Components/DropdownSelect',
  component: DropdownSelect,
  argTypes: {}
} as Meta<typeof DropdownSelect>

const Template: StoryFn<typeof DropdownSelect> = () => {
  const [value1, setValue1] = useState('')
  const [value2, setValue2] = useState('')
  const [value3, setValue3] = useState('')
  const [value4, setValue4] = useState('')
  const [value5, setValue5] = useState('')
  const [value6, setValue6] = useState('')
  const [value7, setValue7] = useState('')
  const [value8, setValue8] = useState('')
  const [value9, setValue9] = useState('')
  const [value10, setValue10] = useState('')
  const [value11, setValue11] = useState('')
  const [value12, setValue12] = useState('')

  const option1 = [
    {
      label: 'Item 1',
      value: 'item 1'
    },
    {
      label: 'Item 2',
      value: 'item 2'
    },
    {
      label: 'Item 3',
      value: 'item 3'
    }
  ]

  const option2 = [
    ...option1,
    {
      label: 'This is a very long option',
      value: 'long option'
    }
  ]

  return (
    <div className={styles.container}>
      <h5>Regular Select - button mode</h5>
      <div>
        <div>default</div>
        <DropdownSelect
          placeholder="Choose item"
          options={option1}
          mode="button"
          onChange={option => setValue1(option.value)}
          value={value1}
        />
      </div>
      <div>
        <div>primary</div>
        <DropdownSelect
          placeholder="Choose item"
          options={option2}
          kind="primary"
          mode="button"
          onChange={option => setValue2(option.value)}
          value={value2}
        />
      </div>
      <div>
        <div>secondary</div>
        <DropdownSelect
          placeholder="Choose item"
          options={option2}
          kind="secondary"
          mode="button"
          onChange={option => setValue3(option.value)}
          value={value3}
        />
      </div>

      <h5>Regular Select - input mode</h5>
      <div>
        <div>default</div>
        <DropdownSelect
          placeholder="Choose item"
          options={option1}
          mode="input"
          onChange={option => setValue4(option.value)}
          value={value4}
        />
      </div>
      <div>
        <div>primary</div>
        <DropdownSelect
          placeholder="Choose item"
          options={option2}
          kind="primary"
          mode="input"
          onChange={option => setValue5(option.value)}
          value={value5}
        />
      </div>
      <div>
        <div>secondary</div>
        <DropdownSelect
          placeholder="Choose item"
          options={option2}
          kind="secondary"
          mode="input"
          onChange={option => setValue6(option.value)}
          value={value6}
        />
      </div>

      <h5>Disabled - button mode</h5>
      <div>
        <div>default</div>
        <DropdownSelect
          placeholder="Choose item"
          options={option1}
          disabled
          mode="button"
          onChange={option => setValue7(option.value)}
          value={value7}
        />
      </div>
      <div>
        <div>primary</div>
        <DropdownSelect
          placeholder="Choose item"
          options={option2}
          kind="primary"
          disabled
          mode="button"
          onChange={option => setValue8(option.value)}
          value={value8}
        />
      </div>
      <div>
        <div>secondary</div>
        <DropdownSelect
          placeholder="Choose item"
          options={option2}
          kind="secondary"
          disabled
          mode="button"
          onChange={option => setValue9(option.value)}
          value={value9}
        />
      </div>

      <h5>Disabled - input mode</h5>
      <div>
        <div>default</div>
        <DropdownSelect
          placeholder="Choose item"
          options={option1}
          disabled
          mode="input"
          onChange={option => setValue10(option.value)}
          value={value10}
        />
      </div>
      <div>
        <div>primary</div>
        <DropdownSelect
          placeholder="Choose item"
          options={option2}
          kind="primary"
          disabled
          mode="input"
          onChange={option => setValue11(option.value)}
          value={value11}
        />
      </div>
      <div>
        <div>secondary</div>
        <DropdownSelect
          placeholder="Choose item"
          options={option2}
          kind="secondary"
          disabled
          mode="input"
          onChange={option => setValue12(option.value)}
          value={value12}
        />
      </div>
    </div>
  )
}

export const Example = Template.bind({})
