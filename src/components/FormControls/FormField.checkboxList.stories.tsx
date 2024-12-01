import { Meta } from '@storybook/react'
import { Form, Formik } from 'formik'

import { FormField } from '../FormControls'

import styles from './FormField.stories.module.css'

export default {
  title: 'FormField/checkboxlist',
  component: FormField
} as Meta<typeof FormField>

export const Examples = () => {
  const options = [
    { id: '1', label: 'Checkbox 1' },
    { id: '2', label: 'Checkbox 2' },
    { id: '3', label: 'Checkbox 3' },
    { id: '4', label: 'Checkbox 4' },
    { id: '5', label: 'Checkbox 5' },
    { id: '6', label: 'Checkbox 6' },
    { id: '7', label: 'Checkbox 7' },
    { id: '8', label: 'Checkbox 8' },
    { id: '9', label: 'Checkbox 9' },
    { id: '10', label: 'Checkbox 10' },
    { id: '11', label: 'Checkbox 11' }
  ]

  const initialValues = {
    checkboxlist1: [],
    checkboxlist2: [],
    checkboxlist7: ['1', '2', '3', '4', '10']
  }

  return (
    <Formik initialValues={initialValues} onSubmit={() => undefined} initialErrors={{}} initialTouched={{}}>
      {({ values }) => (
        <>
          <Form>
            <div className={styles.exampleGroup}>
              <div>Values of Checkboxlist1: {JSON.stringify(values.checkboxlist1)}</div>
              <FormField type="checkboxlist" name="checkboxlist1" options={options} />

              <div>Values of Checkboxlist2: {JSON.stringify(values.checkboxlist2)}</div>
              <FormField type="checkboxlist" name="checkboxlist2" options={options} title="this is a title" />

              <FormField
                type="checkboxlist"
                name="checkboxlist3"
                options={[
                  ...options,
                  {
                    id: '12',
                    label: 'Disabled option',
                    disabled: true
                  }
                ]}
                title="Disabled option"
              />

              <FormField
                type="checkboxlist"
                name="checkboxlist4"
                options={options}
                title="Two columns"
                numColumns={2}
              />

              <FormField
                type="checkboxlist"
                name="checkboxlist5"
                options={options}
                title="Four columns"
                numColumns={4}
              />

              <FormField type="checkboxlist" name="checkboxlist6" options={options} title="Disabled" disabled={true} />

              <FormField type="checkboxlist" name="checkboxlist7" options={options} title="With default values" />
            </div>
          </Form>
        </>
      )}
    </Formik>
  )
}
