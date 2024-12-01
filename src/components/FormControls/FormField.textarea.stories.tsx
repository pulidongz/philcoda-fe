import { Meta } from '@storybook/react'
import { Form, Formik } from 'formik'

import { FormField } from '../FormControls'
import { FormErrors, FormTouched } from '../FormControls/FormInput'
import Tooltip from '../Tooltip'

import styles from './FormField.stories.module.css'

export default {
  title: 'FormField/textarea',
  component: FormField
} as Meta<typeof FormField>

export const Examples = () => {
  const errors: FormErrors = {
    textarea9: 'example error message',
    textarea10: 'This is a much much longer error message that eventually will wrap'
  }

  const touched: FormTouched = {
    textarea9: true,
    textarea10: true
  }

  return (
    <Formik initialValues={{}} onSubmit={() => undefined} initialErrors={errors} initialTouched={touched}>
      <Form>
        <div className={styles.exampleGroup}>
          <FormField type="textarea" name="textarea1" />
          <FormField type="textarea" name="textarea2" defaultValue="initial value" />
          <FormField type="textarea" name="textarea3" title="this is a title" />
          <FormField
            type="textarea"
            name="textarea4"
            title={
              <>
                this is a title with a tooltip
                <Tooltip iconSize={16}>
                  Enter a URL that can be shared with your buyers to take them straight to your seller page.
                </Tooltip>
              </>
            }
          />
          <FormField
            type="textarea"
            name="textarea5"
            defaultValue="initial value"
            title="Example with hint"
            hint="This is a hint"
          />
          <FormField
            type="textarea"
            name="textarea6"
            defaultValue="initial value"
            title="Example with hint and tooltip"
            hint={
              <>
                Claim Your Fieldfolio URL*{' '}
                {
                  <Tooltip iconSize={16}>
                    Enter a URL that can be shared with your buyers to take them straight to your seller page.
                  </Tooltip>
                }
              </>
            }
          />
          <FormField
            type="textarea"
            name="textarea7"
            defaultValue="initial value"
            active={true}
            title="Focused example"
          />
          <FormField
            type="textarea"
            name="textarea8"
            defaultValue="initial value"
            active={true}
            kind="primary"
            title="Focused example, primary"
          />
          <FormField type="textarea" name="textarea9" defaultValue="Error state" title="example with error" />
          <FormField
            type="textarea"
            name="textarea10"
            defaultValue="Error state"
            active={true}
            title="example with error & focus"
          />
          <FormField
            type="textarea"
            name="textarea11"
            defaultValue="disabled example"
            disabled={true}
            title="disabled example"
          />
          <FormField type="textarea" name="textarea12" placeholder="this is a placeholder" />
          <FormField type="textarea" name="textarea13" title="this is a title" placeholder="this is a placeholder" />
          <FormField type="textarea" name="textarea14" title="Example with maxLength" maxLength={20} />
          <FormField type="textarea" name="textarea15" title="Debounced" useDebounced={true} />
        </div>
      </Form>
    </Formik>
  )
}
