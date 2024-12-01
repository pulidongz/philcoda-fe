import { Field, FieldAttributes } from 'formik'

import FormInput from './FormInput'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FormField = ({ children, ...props }: FieldAttributes<any>) => (
  <Field component={FormInput} {...props}>
    {children}
  </Field>
)

export default FormField
