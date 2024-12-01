import { Meta } from '@storybook/react'
import { Form, Formik } from 'formik'

import { FormField } from '../FormControls'
import { FormErrors, FormTouched } from '../FormControls/FormInput'

import styles from './FormField.stories.module.css'

export default {
  title: 'FormField/radio',
  component: FormField
} as Meta<typeof FormField>

export const Radio = () => {
  const errors: FormErrors = {
    radio6: 'example error message',
    radio7: 'This is a much much longer error message that eventually will wrap'
  }

  const touched: FormTouched = {
    radio1: true,
    radio6: true,
    radio7: true
  }

  const initialValues = {
    radio1: 'aaa',
    radio2: 'test',
    radio4: 'test',
    radio5: 'test',
    radio7: 'test',
    radio8: 'test'
  }

  return (
    <Formik initialValues={initialValues} onSubmit={() => undefined} initialErrors={errors} initialTouched={touched}>
      <Form>
        <div className={styles.exampleGroup}>
          <div className={styles.horizontalGroup}>
            <FormField type="radio" name="radio1" value="aaa">
              Option A
            </FormField>
            <FormField type="radio" name="radio1" value="bbb">
              Option B
            </FormField>
            <FormField type="radio" name="radio1" value="ccc">
              Option C
            </FormField>
          </div>
          <FormField type="radio" name="radio2" radioValue="test" />
          <FormField type="radio" name="radio3" radioValue="test">
            This is a radio label
          </FormField>
          <FormField type="radio" name="radio4" radioValue="test" title="this is the title">
            This is the label
          </FormField>
          <FormField type="radio" name="radio5" radioValue="test" title="this is a primary radio" kind="primary">
            This is the label
          </FormField>
          <FormField type="radio" name="radio6" radioValue="test" title="example with error">
            Radio title
          </FormField>
          <FormField type="radio" name="radio7" radioValue="test" title="example with error & focus">
            Radio title
          </FormField>
          <FormField type="radio" name="radio8" radioValue="test" disabled={true} title="radio disabled" />
          <FormField type="radio" name="radio9" radioValue="test" title="this is a title">
            Radio label
          </FormField>

          <br />
          <br />

          <FormField type="radio" name="radio10" radioValue="cat">
            Radio label option 1
          </FormField>

          <FormField type="radio" name="radio11" radioValue="dog">
            Radio label option 2
          </FormField>
        </div>
      </Form>
    </Formik>
  )
}
