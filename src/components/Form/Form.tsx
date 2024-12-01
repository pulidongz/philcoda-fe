import { useState, useEffect, createContext, Dispatch, SetStateAction } from 'react'

import { Form as FormikForm, FormikFormProps } from 'formik'

export type FormContextProps = {
  disabled: boolean
  setDisabled: Dispatch<SetStateAction<boolean>>
}

export const FormContext = createContext({} as FormContextProps)

type FormProps = FormikFormProps & {
  disabled?: boolean
}

/*
 * This 'Form' component wraps the Form component from Formik.
 *
 * It adds a `disabled` method, which allows child components to check if the
 * form is disabled, and if so, disable themselves
 */
const Form = ({ disabled: isDisabled = false, children, ...props }: FormProps) => {
  const [disabled, setDisabled] = useState<boolean>(isDisabled)

  useEffect(() => {
    setDisabled(isDisabled)
  }, [isDisabled])

  return (
    <FormContext.Provider value={{ disabled, setDisabled }}>
      <FormikForm {...props}>{children}</FormikForm>
    </FormContext.Provider>
  )
}

export default Form
