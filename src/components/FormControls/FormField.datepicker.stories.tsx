import { Meta } from '@storybook/react'
import { Form, Formik } from 'formik'

import { FormField } from '../FormControls'
import { FormErrors, FormTouched } from '../FormControls/FormInput'

import styles from './FormField.stories.module.css'

export default {
  title: 'FormField/datepicker',
  component: FormField
} as Meta<typeof FormField>

export const Examples = () => {
  const errors: FormErrors = {
    datepicker5: 'example error message',
    datepicker6: 'This is a much much longer error message that eventually will wrap'
  }

  const touched: FormTouched = {
    datepicker5: true,
    datepicker6: true
  }

  const initialValues = {
    datepicker4: '2012-12-21',
    datepicker5: '2012-12-21',
    datepicker6: '2012-12-21',
    datepicker7: '2012-12-21'
  }

  return (
    <Formik initialValues={initialValues} onSubmit={() => undefined} initialErrors={errors} initialTouched={touched}>
      <Form>
        <div className={styles.exampleGroup}>
          <FormField type="datepicker" name="datepicker1" />
          <FormField type="datepicker" name="datepicker2" field={{ value: '2012-12-21' }} />
          <FormField
            type="datepicker"
            name="datepicker3"
            field={{ value: '2012-12-21' }}
            active={true}
            title="Focused example"
          />
          <FormField
            type="datepicker"
            name="datepicker4"
            active={true}
            kind="primary"
            title="Focused example, primary"
          />
          <FormField type="datepicker" name="datepicker5" title="example with error" />
          <FormField type="datepicker" name="datepicker6" title="example with error & focus" active={true} />
          <FormField type="datepicker" name="datepicker7" disabled title="datepicker disabled" />
          <FormField type="datepicker" name="datepicker8" title="this is a title" />
        </div>
      </Form>
    </Formik>
  )
}
