import { Meta } from '@storybook/react'
import { Form, Formik } from 'formik'

import { FormField } from '../FormControls'
import { FormErrors, FormTouched } from '../FormControls/FormInput'

import styles from './FormField.stories.module.css'

export default {
  title: 'FormField/tagpicker',
  component: FormField
} as Meta<typeof FormField>

export const Examples = () => {
  const errors: FormErrors = {
    tagpicker5: 'example error message',
    tagpicker6: 'This is a much much longer error message that eventually will wrap'
  }

  const touched: FormTouched = {
    tagpicker5: true,
    tagpicker6: true
  }
  return (
    <Formik initialValues={{}} onSubmit={() => undefined} initialErrors={errors} initialTouched={touched}>
      <Form>
        <div className={styles.exampleGroup}>
          <FormField
            type="tagpicker"
            name="tagpicker1"
            options={['Kids', 'Kitchen', 'Fashion', 'Gifts', 'Outdoors', 'Seasonal']}
            tagStyle="tinted"
            color="blue"
          />
          <FormField
            type="tagpicker"
            name="tagpicker2"
            options={['Kids', 'Kitchen', 'Fashion', 'Gifts', 'Outdoors', 'Seasonal']}
            field={{ value: ['Kids', 'Fashion'] }}
            title="this is a title"
            tagStyle="tinted"
            color="blue"
          />
          <FormField
            type="tagpicker"
            name="tagpicker3"
            options={['Kids', 'Kitchen', 'Fashion', 'Gifts', 'Outdoors', 'Seasonal']}
            field={{ value: ['Kids', 'Fashion'] }}
            title="focused example"
            active={true}
            tagStyle="tinted"
            color="green"
          />
          <FormField
            type="tagpicker"
            name="tagpicker4"
            options={['Kids', 'Kitchen', 'Fashion', 'Gifts', 'Outdoors', 'Seasonal']}
            field={{ value: ['Kids', 'Fashion'] }}
            title="focused example, primary"
            active={true}
            kind="primary"
            tagStyle="round"
            color="gray"
          />
          <FormField
            type="tagpicker"
            name="tagpicker5"
            field={{ value: ['Kids', 'Fashion'] }}
            title="example with error"
            options={['Kids', 'Kitchen', 'Fashion', 'Gifts', 'Outdoors', 'Seasonal']}
            tagStyle="solid"
            color="purple"
          />
          <FormField
            type="tagpicker"
            name="tagpicker6"
            field={{ value: ['Kids', 'Fashion'] }}
            title="example with error & focus"
            active={true}
            options={['Kids', 'Kitchen', 'Fashion', 'Gifts', 'Outdoors', 'Seasonal']}
          />
          <FormField
            type="tagpicker"
            name="tagpicker7"
            field={{ value: ['Kids', 'Fashion'] }}
            form={{ touched: touched }}
            title="example with changed value"
            options={['Kids', 'Kitchen', 'Fashion', 'Gifts', 'Outdoors', 'Seasonal']}
            originalValue={['Gifts']}
          />
          <FormField
            type="tagpicker"
            name="tagpicker8"
            field={{ value: ['Kids', 'Fashion'] }}
            form={{ touched: touched }}
            title="example with changed value & focus"
            options={['Kids', 'Kitchen', 'Fashion', 'Gifts', 'Outdoors', 'Seasonal']}
            originalValue={['Gifts']}
            active={true}
          />
          <FormField
            type="tagpicker"
            name="tagpicker9"
            field={{ value: ['Kids', 'Fashion'] }}
            options={['Kids', 'Kitchen', 'Fashion', 'Gifts', 'Outdoors', 'Seasonal']}
            title="disabled example"
            disabled={true}
          />
        </div>
      </Form>
    </Formik>
  )
}

export const ExamplesWithValueAndLabels = () => (
  <Formik initialValues={{ tagpicker1: [] }} onSubmit={() => undefined}>
    {({ values }) => (
      <Form>
        <h3>Example that shows tagpicker using value/label Options</h3>
        <p>
          E.g.
          <code>
            const options ={' '}
            {JSON.stringify([
              { value: 'kids', label: 'Kids' },
              { value: 'kitchen', label: 'Kitchen' }
            ])}
          </code>
        </p>
        <p>SELECTED VALUES: {JSON.stringify(values.tagpicker1)}</p>
        <div className={styles.exampleGroup}>
          <FormField
            type="tagpicker"
            name="tagpicker1"
            options={[
              { value: 'kids', label: 'Kids' },
              { value: 'kitchen', label: 'Kitchen' },
              { value: 'fashion', label: 'Fashion' },
              { value: 'gifts', label: 'Gifts' },
              { value: 'outdoors', label: 'Outdoors' },
              { value: 'seasonal', label: 'Seasonal' }
            ]}
            tagStyle="tinted"
            color="blue"
          />
        </div>
      </Form>
    )}
  </Formik>
)
