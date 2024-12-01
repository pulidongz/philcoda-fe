import { Meta } from '@storybook/react'
import { Form, Formik } from 'formik'

import { FormField } from '../FormControls'
import { FormErrors, FormTouched } from '../FormControls/FormInput'

import styles from './FormField.stories.module.css'

export default {
  title: 'FormField/checkboxdropdown',
  component: FormField
} as Meta<typeof FormField>

export const Examples = () => {
  const errors: FormErrors = {
    checkboxdropdown4: 'example error message',
    checkboxdropdown5: 'This is a much much longer error message that eventually will wrap'
  }

  const touched: FormTouched = {
    checkboxdropdown4: true,
    checkboxdropdown5: true
  }
  return (
    <Formik initialValues={{}} onSubmit={() => undefined} initialErrors={errors} initialTouched={touched}>
      <Form>
        <div className={styles.exampleGroup}>
          <FormField
            type="checkboxdropdown"
            name="checkboxdropdown100"
            placeholder="Country with  a very long placeholder text that will wrap"
            options={[
              { value: 'AZ', label: 'Austria' },
              { value: 'AU', label: 'Australia' },
              { value: 'FR', label: 'France' },
              { value: 'UK', label: 'United Kingdom' },
              { value: 'US', label: 'United States' },
              { value: 'NZ', label: 'New Zealand' }
            ]}
            title="Single choice only"
            isSingleChoice
          />
          <FormField
            type="checkboxdropdown"
            name="checkboxdropdown101"
            placeholder="Country"
            options={[
              { value: 'AZ', label: 'Austria' },
              { value: 'AU', label: 'Australia' },
              { value: 'FR', label: 'France' },
              { value: 'UK', label: 'United Kingdom' },
              { value: 'US', label: 'United States' },
              { value: 'NZ', label: 'New Zealand' }
            ]}
            title="Multiple choices"
          />
          <FormField
            type="checkboxdropdown"
            name="checkboxdropdown1"
            placeholder="Country"
            options={[
              { value: 'AZ', label: 'Austria' },
              { value: 'AU', label: 'Australia' },
              { value: 'FR', label: 'France' },
              { value: 'UK', label: 'United Kingdom' },
              { value: 'US', label: 'United States' },
              { value: 'NZ', label: 'New Zealand' }
            ]}
            field={{ value: ['AZ', 'AU'] }}
            title="this is a title"
          />
          <FormField
            type="checkboxdropdown"
            name="checkboxdropdown3"
            placeholder="Country"
            options={[
              { value: 'AZ', label: 'Austria' },
              { value: 'AU', label: 'Australia' },
              { value: 'FR', label: 'France' },
              { value: 'UK', label: 'United Kingdom' },
              { value: 'US', label: 'United States' },
              { value: 'NZ', label: 'New Zealand' }
            ]}
            field={{ value: ['AZ', 'AU'] }}
            title="focused example"
            active={true}
          />
          <FormField
            type="checkboxdropdown"
            name="checkboxdropdown4"
            placeholder="Country"
            value={['AZ', 'AU']}
            title="example with error"
            options={[
              { value: 'AZ', label: 'Austria' },
              { value: 'AU', label: 'Australia' },
              { value: 'FR', label: 'France' },
              { value: 'UK', label: 'United Kingdom' },
              { value: 'US', label: 'United States' },
              { value: 'NZ', label: 'New Zealand' }
            ]}
          />
          <FormField
            type="checkboxdropdown"
            name="checkboxdropdown5"
            placeholder="Country"
            value={['AZ', 'AU']}
            title="example with error & focus"
            active={true}
            options={[
              { value: 'AZ', label: 'Austria' },
              { value: 'AU', label: 'Australia' },
              { value: 'FR', label: 'France' },
              { value: 'UK', label: 'United Kingdom' },
              { value: 'US', label: 'United States' },
              { value: 'NZ', label: 'New Zealand' }
            ]}
          />
          <FormField
            type="checkboxdropdown"
            name="checkboxdropdown6"
            placeholder="Country"
            field={{ value: ['AZ', 'AU'] }}
            form={{ touched: touched }}
            title="example with changed value"
            options={[
              { value: 'AZ', label: 'Austria' },
              { value: 'AU', label: 'Australia' },
              { value: 'FR', label: 'France' },
              { value: 'UK', label: 'United Kingdom' },
              { value: 'US', label: 'United States' },
              { value: 'NZ', label: 'New Zealand' }
            ]}
            originalValue={['Gifts']}
          />
          <FormField
            type="checkboxdropdown"
            name="checkboxdropdown7"
            placeholder="Country"
            field={{ value: ['AZ', 'AU'] }}
            form={{ touched: touched }}
            title="example with changed value & focus"
            options={[
              { value: 'AZ', label: 'Austria' },
              { value: 'AU', label: 'Australia' },
              { value: 'FR', label: 'France' },
              { value: 'UK', label: 'United Kingdom' },
              { value: 'US', label: 'United States' },
              { value: 'NZ', label: 'New Zealand' }
            ]}
            originalValue={['Gifts']}
            active={true}
          />
          <FormField
            type="checkboxdropdown"
            name="checkboxdropdown8"
            placeholder="Country"
            field={{ value: ['AZ', 'AU'] }}
            options={[
              { value: 'AZ', label: 'Austria' },
              { value: 'AU', label: 'Australia' },
              { value: 'FR', label: 'France' },
              { value: 'UK', label: 'United Kingdom' },
              { value: 'US', label: 'United States' },
              { value: 'NZ', label: 'New Zealand' }
            ]}
            title="disabled example"
            disabled={true}
          />
        </div>

        <hr />

        <div className={styles.exampleGroup}>
          <FormField
            type="checkboxdropdown"
            name="checkboxdropdown9"
            placeholder="Country"
            kind="light"
            options={[
              { value: 'AZ', label: 'Austria' },
              { value: 'AU', label: 'Australia' },
              { value: 'FR', label: 'France' },
              { value: 'UK', label: 'United Kingdom' },
              { value: 'US', label: 'United States' },
              { value: 'NZ', label: 'New Zealand' }
            ]}
          />
          <FormField
            type="checkboxdropdown"
            name="checkboxdropdown10"
            placeholder="Country"
            kind="light"
            options={[
              { value: 'AZ', label: 'Austria' },
              { value: 'AU', label: 'Australia' },
              { value: 'FR', label: 'France' },
              { value: 'UK', label: 'United Kingdom' },
              { value: 'US', label: 'United States' },
              { value: 'NZ', label: 'New Zealand' }
            ]}
            field={{ value: ['AZ', 'AU'] }}
            title="this is a title"
          />
          <FormField
            type="checkboxdropdown"
            name="checkboxdropdown11"
            placeholder="Country"
            kind="light"
            options={[
              { value: 'AZ', label: 'Austria' },
              { value: 'AU', label: 'Australia' },
              { value: 'FR', label: 'France' },
              { value: 'UK', label: 'United Kingdom' },
              { value: 'US', label: 'United States' },
              { value: 'NZ', label: 'New Zealand' }
            ]}
            field={{ value: ['AZ', 'AU'] }}
            title="focused example"
            active={true}
          />
          <FormField
            type="checkboxdropdown"
            name="checkboxdropdown12"
            placeholder="Country"
            field={{ value: ['AZ', 'AU'] }}
            title="example with error"
            options={[
              { value: 'AZ', label: 'Austria' },
              { value: 'AU', label: 'Australia' },
              { value: 'FR', label: 'France' },
              { value: 'UK', label: 'United Kingdom' },
              { value: 'US', label: 'United States' },
              { value: 'NZ', label: 'New Zealand' }
            ]}
            kind="light"
          />
          <FormField
            type="checkboxdropdown"
            name="checkboxdropdown13"
            placeholder="Country"
            field={{ value: ['AZ', 'AU'] }}
            title="example with error & focus"
            active={true}
            options={[
              { value: 'AZ', label: 'Austria' },
              { value: 'AU', label: 'Australia' },
              { value: 'FR', label: 'France' },
              { value: 'UK', label: 'United Kingdom' },
              { value: 'US', label: 'United States' },
              { value: 'NZ', label: 'New Zealand' }
            ]}
            kind="light"
          />
          <FormField
            type="checkboxdropdown"
            name="checkboxdropdown14"
            placeholder="Country"
            field={{ value: ['AZ', 'AU'] }}
            form={{ touched: touched }}
            title="example with changed value"
            options={[
              { value: 'AZ', label: 'Austria' },
              { value: 'AU', label: 'Australia' },
              { value: 'FR', label: 'France' },
              { value: 'UK', label: 'United Kingdom' },
              { value: 'US', label: 'United States' },
              { value: 'NZ', label: 'New Zealand' }
            ]}
            originalValue={['Gifts']}
            kind="light"
          />
          <FormField
            type="checkboxdropdown"
            name="checkboxdropdown15"
            placeholder="Country"
            field={{ value: ['AZ', 'AU'] }}
            form={{ touched: touched }}
            title="example with changed value & focus"
            options={[
              { value: 'AZ', label: 'Austria' },
              { value: 'AU', label: 'Australia' },
              { value: 'FR', label: 'France' },
              { value: 'UK', label: 'United Kingdom' },
              { value: 'US', label: 'United States' },
              { value: 'NZ', label: 'New Zealand' }
            ]}
            originalValue={['Gifts']}
            active={true}
            kind="light"
          />
          <FormField
            type="checkboxdropdown"
            name="checkboxdropdown16"
            placeholder="Country"
            field={{ value: ['AZ', 'AU'] }}
            options={[
              { value: 'AZ', label: 'Austria' },
              { value: 'AU', label: 'Australia' },
              { value: 'FR', label: 'France' },
              { value: 'UK', label: 'United Kingdom' },
              { value: 'US', label: 'United States' },
              { value: 'NZ', label: 'New Zealand' }
            ]}
            title="disabled example"
            disabled={true}
            kind="light"
          />
        </div>
      </Form>
    </Formik>
  )
}
