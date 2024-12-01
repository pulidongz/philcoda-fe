import { Meta } from '@storybook/react'
import { Form, Formik } from 'formik'

import { FormField } from '../FormControls'
import { FormErrors, FormTouched } from '../FormControls/FormInput'

import styles from './FormField.stories.module.css'

export default {
  title: 'FormField/typeahead',
  component: FormField
} as Meta<typeof FormField>

export const Examples = () => {
  const errors: FormErrors = {
    typeahead5: 'example error message',
    typeahead6: 'This is a much much longer error message that eventually will wrap'
  }

  const touched: FormTouched = {
    typeahead5: true,
    typeahead6: true
  }
  return (
    <Formik initialValues={{}} onSubmit={() => undefined} initialErrors={errors} initialTouched={touched}>
      <Form>
        <div className={styles.exampleGroup}>
          <FormField
            type="typeahead"
            name="typeahead1"
            loadFn={async () => [
              { value: 'AZ', label: 'Austria' },
              { value: 'AU', label: 'Australia' },
              { value: 'FR', label: 'France' },
              { value: 'UK', label: 'United Kingdom' },
              { value: 'US', label: 'United States' },
              { value: 'NZ', label: 'New Zealand' }
            ]}
          />
          <FormField
            type="typeahead"
            name="typeahead2"
            loadFn={async () => [
              { value: 'AZ', label: 'Austria' },
              { value: 'AU', label: 'Australia' },
              { value: 'FR', label: 'France' },
              { value: 'UK', label: 'United Kingdom' },
              { value: 'US', label: 'United States' },
              { value: 'NZ', label: 'New Zealand' }
            ]}
            active={true}
            title="Focused example"
          />
          <FormField
            type="typeahead"
            name="typeahead3"
            loadFn={async () => [
              { value: 'AZ', label: 'Austria' },
              { value: 'AU', label: 'Australia' },
              { value: 'FR', label: 'France' },
              { value: 'UK', label: 'United Kingdom' },
              { value: 'US', label: 'United States' },
              { value: 'NZ', label: 'New Zealand' }
            ]}
            active={true}
            title="Focused example, primary"
            kind="primary"
          />
          <FormField
            type="typeahead"
            name="typeahead4"
            loadFn={async () => [
              { value: 'AZ', label: 'Austria' },
              { value: 'AU', label: 'Australia' },
              { value: 'FR', label: 'France' },
              { value: 'UK', label: 'United Kingdom' },
              { value: 'US', label: 'United States' },
              { value: 'NZ', label: 'New Zealand' }
            ]}
            disabled={true}
            title="Disabled example"
          />
          <FormField
            type="typeahead"
            name="typeahead5"
            title="example with error"
            loadFn={async () => [
              { value: 'AZ', label: 'Austria' },
              { value: 'AU', label: 'Australia' },
              { value: 'FR', label: 'France' },
              { value: 'UK', label: 'United Kingdom' },
              { value: 'US', label: 'United States' },
              { value: 'NZ', label: 'New Zealand' }
            ]}
          />
          <FormField
            type="typeahead"
            name="typeahead6"
            title="example with error & focus"
            loadFn={async () => [
              { value: 'AZ', label: 'Austria' },
              { value: 'AU', label: 'Australia' },
              { value: 'FR', label: 'France' },
              { value: 'UK', label: 'United Kingdom' },
              { value: 'US', label: 'United States' },
              { value: 'NZ', label: 'New Zealand' }
            ]}
            active={true}
          />
        </div>
      </Form>
    </Formik>
  )
}
