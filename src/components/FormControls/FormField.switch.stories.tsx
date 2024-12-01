import { Meta } from '@storybook/react'
import { Form, Formik } from 'formik'

import { FormField } from '../FormControls'
import { FormErrors, FormTouched } from '../FormControls/FormInput'
import Tooltip from '../Tooltip'

import styles from './FormField.stories.module.css'

export default {
  title: 'FormField/switch',
  component: FormField
} as Meta<typeof FormField>

export const Examples = () => {
  const errors: FormErrors = {
    switch8: 'example error message',
    switch9: 'This is a much much longer error message that eventually will wrap'
  }

  const touched: FormTouched = {
    switch8: true,
    switch9: true
  }
  return (
    <Formik initialValues={{}} onSubmit={() => undefined} initialErrors={errors} initialTouched={touched}>
      <Form>
        <div className={styles.exampleGroup}>
          <FormField type="switch" name="switch1" />
          <FormField type="switch" name="switch2" />
          <FormField type="switch" name="switch3">
            This is a switch label
          </FormField>
          <FormField type="switch" name="switch4" title="this is a title">
            Switch label
          </FormField>
          <FormField type="switch" name="switch5" field={{ value: true }} title="this is the title">
            This is the label
          </FormField>
          <FormField
            type="switch"
            name="switch6"
            field={{ value: true }}
            title={
              <>
                Switch with icon in the title
                <Tooltip iconSize={16}>
                  Enter a URL that can be shared with your buyers to take them straight to your seller page.
                </Tooltip>
              </>
            }>
            This is the label
          </FormField>
          <FormField type="switch" name="switch7" field={{ value: true }} title="Switch with icon in the label">
            This is the label
            <Tooltip iconSize={16}>
              Enter a URL that can be shared with your buyers to take them straight to your seller page.
            </Tooltip>
          </FormField>
          <FormField type="switch" name="switch8" title="example with error">
            Swith title
          </FormField>
          <FormField type="switch" name="switch9" title="example with error & focus" active={true}>
            Switch title
          </FormField>
          <FormField type="switch" name="switch10" field={{ value: true }} disabled={true} title="switch on & disabled">
            This is the switch label
          </FormField>
          <FormField type="switch" name="switch11" disabled={true} title="switch off & disabled">
            This is the switch label
          </FormField>
        </div>
      </Form>
    </Formik>
  )
}
