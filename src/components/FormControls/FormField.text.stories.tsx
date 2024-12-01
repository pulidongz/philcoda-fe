import { Meta } from '@storybook/react'
import { Form, Formik } from 'formik'

import { FormField } from '../FormControls'
import { FormErrors, FormTouched } from '../FormControls/FormInput'
import Tooltip from '../Tooltip'

import styles from './FormField.stories.module.css'

export default {
  title: 'FormField/text',
  component: FormField
} as Meta<typeof FormField>

export const Examples = () => {
  const errors: FormErrors = {
    text12: 'example error message',
    text13: 'This is a much much longer error message that eventually will wrap',
    text14: 'example error message'
  }

  const touched: FormTouched = {
    text12: true,
    text13: true,
    text14: true
  }

  const initialValues = {
    text15: 'disabled example'
  }

  return (
    <Formik initialValues={initialValues} onSubmit={() => undefined} initialErrors={errors} initialTouched={touched}>
      <Form>
        <div className={styles.exampleGroup}>
          <FormField type="text" name="text1" />
          <FormField type="text" name="text2" defaultValue="initial value" />
          <FormField type="text" name="text3" title="this is a title" />
          <FormField
            type="text"
            name="text4"
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
            type="text"
            name="text5"
            defaultValue="initial value"
            title="Example with description"
            description="This is a description"
          />
          <FormField
            type="text"
            name="text6"
            defaultValue="initial value"
            title="Example with hint"
            hint="This is a hint"
          />
          <FormField
            type="text"
            name="text7"
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
          <FormField type="text" name="text8" defaultValue="initial value" title="With left icon" iconLeft="user" />
          <FormField type="text" name="text9" defaultValue="initial value" title="With right icon" iconRight="search" />
          <FormField
            type="text"
            name="text10"
            defaultValue="initial value"
            title="With two icons"
            iconLeft="info"
            iconRight="search"
          />
          <FormField type="text" name="text11" defaultValue="initial value" active={true} title="Focused example" />
          <FormField type="text" name="text12" defaultValue="Error state" title="Example with error" />
          <FormField type="text" name="text13" defaultValue="Error state" title="Example with long error message" />
          <FormField
            type="text"
            name="text14"
            defaultValue="Error state"
            active={true}
            title="Example with error & focus"
          />
          <FormField
            type="text"
            name="text15"
            defaultValue="disabled example"
            disabled={true}
            title="disabled example"
          />
          <FormField
            type="text"
            name="text16"
            defaultValue="initial value"
            title="Disabled state with icons"
            disabled={true}
            iconLeft="info"
            iconRight="search"
          />
          <FormField type="text" name="text17" placeholder="this is a placeholder" />
          <FormField type="text" name="text18" title="this is a title" placeholder="this is a placeholder" />
          <FormField type="text" name="text19" title="Example with maxLength" maxLength={20} />
          <FormField type="text" name="text20" title="Debounced" useDebounced={true} />
          <FormField type="email" name="text21" title="Email" placeholder="what is your email?" />
          <FormField type="password" name="text22" title="Password" />
          <FormField
            type="number"
            title="Number"
            placeholder="what is your age?"
            name="text23"
            inputProps={{
              min: 1,
              step: 1
            }}
          />
        </div>
      </Form>
    </Formik>
  )
}
