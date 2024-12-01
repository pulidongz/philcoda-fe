import { Meta } from '@storybook/react'
import { Form, Formik } from 'formik'

import { FormField } from '../FormControls'
import { FormErrors, FormTouched } from '../FormControls/FormInput'

export default {
  title: 'FormField/checkbox',
  component: FormField
} as Meta<typeof FormField>

export const Examples = () => {
  const errors: FormErrors = {
    checkbox7: 'example error message',
    checkbox8: 'This is a much much longer error message that eventually will wrap'
  }

  const touched: FormTouched = {
    checkbox7: true,
    checkbox8: true
  }

  const initialValues = {
    checkbox2: true,
    checkbox5: true,
    checkbox6: true,
    checkbox9: true
  }

  return (
    <Formik initialValues={initialValues} onSubmit={() => undefined} initialErrors={errors} initialTouched={touched}>
      <Form>
        <div className="exampleGroup">
          <FormField type="checkbox" name="checkbox1" checked={true} />
          <FormField type="checkbox" name="checkbox2" />
          <FormField type="checkbox" name="checkbox3">
            This is a checkbox label
          </FormField>
          <FormField type="checkbox" name="checkbox4" title="this is a title">
            Checkbox label
          </FormField>
          <FormField type="checkbox" name="checkbox5" title="this is the title">
            This is the label
          </FormField>
          <FormField type="checkbox" name="checkbox6" title="this is the title" kind="primary">
            This is a primary checkbox
          </FormField>
          <FormField type="checkbox" name="checkbox7" title="example with error">
            Checkbox title
          </FormField>
          <FormField type="checkbox" name="checkbox8" title="example with error & focus" active={true}>
            Checkbox title
          </FormField>
          <FormField type="checkbox" name="checkbox9" disabled={true} title="checkbox disabled">
            This is the checkbox label
          </FormField>
        </div>
      </Form>
    </Formik>
  )
}
