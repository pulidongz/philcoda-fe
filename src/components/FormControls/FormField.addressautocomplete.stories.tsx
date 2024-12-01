import { useState } from 'react'
import * as Yup from 'yup'

import { Meta } from '@storybook/react'
import { Form, Formik, FormikHelpers } from 'formik'
import { Fieldset, FormField } from '../FormControls'
import Button from '../Button'
import { AddressValueProps } from '../AddressAutocomplete/AddressAutocomplete'

import styles from './FormField.stories.module.css'

export default {
  title: 'FormField/addressAutocomplete',
  component: FormField,
  argTypes: {
    value: {
      control: {
        type: 'object'
      }
    }
  }
} as Meta<typeof FormField>

const addressAutocompleteValue = {
  id: 1,
  street1: '7 Smith Street',
  city: 'Ryde',
  state: 'NSW',
  country: 'AU',
  postcode: '2112'
}

export const Examples = () => {
  const [addressValues, setAddressValues] = useState<AddressValueProps>()
  const initialValues = {
    userAddress: undefined,
    addressAutocomplete1: '',
    addressAutocomplete2: addressAutocompleteValue,
    addressAutocomplete4: '',
    addressAutocomplete5: '',
    addressAutocomplete6: ''
  }

  const validationSchema = Yup.object().shape({
    userAddress: Yup.object().shape({
      id: Yup.string().optional(),
      city: Yup.string().max(191).required(),
      state: Yup.string().max(191).required(),
      country: Yup.string().max(191).required(),
      postcode: Yup.string().max(191).optional().nullable()
    })
  })

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (values: any, { setSubmitting }: FormikHelpers<any>) => {
    setSubmitting(true)
    setAddressValues(values)
    setSubmitting(false)
  }

  return (
    <>
      <div>Address Values: {addressValues && JSON.stringify(addressValues)}</div>

      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {({ submitForm }) => {
          return (
            <Form>
              <div className={styles.exampleGroup}>
                <p>Default search behaviour</p>
                <Fieldset title="Fieldset">
                  <FormField type="addressAutocomplete" name="userAddress" kind="primary" title="User Address" />
                </Fieldset>
                <Button kind="primary" size="mini" onClick={submitForm}>
                  Submit
                </Button>

                <div className={styles.divider} />

                <p>Disabled input</p>
                <Fieldset>
                  <FormField
                    type="addressAutocomplete"
                    name="addressAutocomplete1"
                    kind="primary"
                    title="Address"
                    disabled
                  />
                </Fieldset>

                <p>With initial value</p>
                <Fieldset>
                  <FormField type="addressAutocomplete" name="addressAutocomplete2" kind="primary" title="Address" />
                </Fieldset>

                <p>&apos;placeOnly&apos; search, no street1 & street2 values</p>
                <Fieldset>
                  <FormField
                    type="addressAutocomplete"
                    name="addressAutocomplete4"
                    kind="primary"
                    title="Address"
                    placeOnly
                    onChange={() => setTimeout(submitForm, 250)}
                  />
                </Fieldset>

                <p>regionally restricted: &apos;au&apos; only</p>
                <Fieldset>
                  <FormField
                    type="addressAutocomplete"
                    name="addressAutocomplete5"
                    kind="primary"
                    title="Address"
                    placeholder="Enter a location in Australia"
                    restrictCountries="au"
                    onChange={() => setTimeout(submitForm, 250)}
                  />
                </Fieldset>

                <p>&apos;placeOnly&apos; and regionally restricted: &apos;au&apos; only</p>
                <Fieldset>
                  <FormField
                    type="addressAutocomplete"
                    name="addressAutocomplete6"
                    kind="primary"
                    title="Address"
                    placeholder="Enter a location in Australia"
                    restrictCountries="au"
                    placeOnly
                    onChange={() => setTimeout(submitForm, 250)}
                  />
                </Fieldset>
              </div>
            </Form>
          )
        }}
      </Formik>
    </>
  )
}
