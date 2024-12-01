import { Form, Formik } from 'formik'

import Button from '../../../../components/Button'
import { FormField } from '../../../../components/FormControls'

const HistoricalDataDownloader = () => {
  const submitSearch = () => {
    console.log('submitSearch')
  }

  const yearOptions = [
    { label: '2018', value: '2018' },
    { label: '2019', value: '2019' },
    { label: '2020', value: '2020' },
    { label: '2021', value: '2021' },
    { label: '2022', value: '2022' },
    { label: '2023', value: '2023' }
  ]

  return (
    <Formik initialValues={{}} onSubmit={submitSearch}>
      {({ isSubmitting, submitForm }) => {
        return (
          <Form className="formContainer">
            <FormField
              name="startYear"
              type="select"
              mode="button"
              placeholder="Start Year"
              kind="secondary"
              options={yearOptions}
              onChange={() => setTimeout(submitForm, 250)}
            />

            <FormField
              name="endYear"
              type="select"
              mode="button"
              placeholder="End Year"
              kind="secondary"
              options={yearOptions}
              onChange={() => setTimeout(submitForm, 250)}
            />

            <Button className="manualBtn" kind="primary" disabled={isSubmitting} isSubmitting={isSubmitting}>
              Download
            </Button>
          </Form>
        )
      }}
    </Formik>
  )
}

export default HistoricalDataDownloader
