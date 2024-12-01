import { useState } from 'react'
import { Meta } from '@storybook/react'

import SlugPicker from '../SlugPicker'

import styles from './SlugPicker.stories.module.css'

export default {
  title: 'Components/SlugPicker',
  component: SlugPicker,
  argTypes: {}
} as Meta<typeof SlugPicker>

export const SlugPickerDefault = () => {
  const [value1, setValue1] = useState<string>()
  const [value2, setValue2] = useState<string>()
  const [value3, setValue3] = useState<string>('super-catalog')
  return (
    <>
      <div className={styles.separator}>
        <SlugPicker
          name="brandValuesField1"
          prefix="fieldfolio.com/"
          value={value1}
          onChange={slug => setValue1(slug)}
        />
      </div>

      <div className={styles.separator}>
        <SlugPicker
          name="brandValuesField2"
          prefix="fieldfolio.com/"
          placeholder="your-brand"
          value={value2}
          onChange={slug => setValue2(slug)}
        />
      </div>

      <div className={styles.separator}>
        <SlugPicker
          name="brandValuesField3"
          prefix="fieldfolio.com/"
          placeholder="your-brand"
          value={value3}
          onChange={slug => setValue3(slug)}
        />
      </div>
    </>
  )
}
