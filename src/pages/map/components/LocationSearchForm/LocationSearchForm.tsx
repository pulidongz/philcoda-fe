import { Form, Formik, FormikHelpers } from 'formik'
import { useSearchParams } from 'react-router-dom'

import { FormField } from '../../../../components/FormControls'

const LocationSearchForm = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const initialValues = {
    addressSearch: undefined
  }

  const submitSearch = (
    values: { addressSearch: undefined },
    { setSubmitting }: FormikHelpers<{ addressSearch: undefined }>
  ) => {
    setSubmitting(true)
    changeUrl(values)
    setSubmitting(false)
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const changeUrl = (values: any) => {
    if (!values.addressSearch.latitude || !values.addressSearch.longitude) {
      searchParams.delete('loc')
      setSearchParams(searchParams)
      return
    }

    if (!values.addressSearch.city || !values.addressSearch.province) {
      searchParams.delete('city')
      searchParams.delete('province')
      setSearchParams(searchParams)
      return
    }

    const loc = `${values.addressSearch?.latitude}, ${values.addressSearch?.longitude}`
    const { street1: brgy, city, province } = values.addressSearch
    const params = { brgy, city, province, loc }
    const filteredParams = Object.fromEntries(Object.entries(params).filter(([, value]) => Boolean(value)))

    setSearchParams(filteredParams)
  }

  return (
    <Formik initialValues={initialValues} onSubmit={submitSearch}>
      {({ submitForm }) => {
        return (
          <Form className="formContainer">
            <FormField
              className="addressAutocomplete"
              name="addressSearch"
              type="addressAutocomplete"
              restrictCountries="ph"
              maxMenuHeight={116}
              kind="primary"
              placeholder="Search location"
              onChange={() => setTimeout(submitForm, 250)}
              onClick={() => setTimeout(submitForm, 250)}
              hasManualMode={false}
            />
          </Form>
        )
      }}
    </Formik>
  )
}

export default LocationSearchForm
