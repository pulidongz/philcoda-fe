import { Meta } from '@storybook/react'
import { Form, Formik } from 'formik'

import { FormField } from '../FormControls'

import styles from './FormField.stories.module.css'

export default {
  title: 'FormField/tileList',
  component: FormField
} as Meta<typeof FormField>

export const Examples = () => {
  const tileContent = <p className={styles.noMargin}>Tile content</p>

  const options = [
    { id: '1', label: 'Checkbox 1', tileContent: tileContent },
    { id: '2', label: 'Checkbox 2', tileContent: tileContent },
    { id: '3', label: 'Checkbox 3', tileContent: tileContent },
    { id: '4', label: 'Checkbox 4', disabled: true, tileContent: tileContent }
  ]

  const initialValues = {
    checkboxlist1: ['1'],
    checkboxlist2: [],
    checkboxlist7: ['1', '2', '3']
  }

  return (
    <Formik initialValues={initialValues} onSubmit={() => undefined} initialErrors={{}} initialTouched={{}}>
      {({ values }) => (
        <>
          <Form>
            <div className={styles.exampleGroup}>
              <div>Values of Checkboxlist1: {JSON.stringify(values.checkboxlist1)}</div>
              <FormField type="tilelist" name="checkboxlist1" options={options} />

              <div>Values of Checkboxlist2: {JSON.stringify(values.checkboxlist2)}</div>
              <FormField type="tilelist" name="checkboxlist2" options={options} title="this is a title" />

              <FormField
                type="tilelist"
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

              <FormField type="tilelist" name="checkboxlist4" options={options} title="Two columns" numColumns={2} />

              <FormField type="tilelist" name="checkboxlist5" options={options} title="Four columns" numColumns={4} />

              <FormField type="tilelist" name="checkboxlist6" options={options} title="Disabled" disabled={true} />

              <FormField type="tilelist" name="checkboxlist7" options={options} title="With default values" />
            </div>
          </Form>
        </>
      )}
    </Formik>
  )
}
