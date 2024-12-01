import FormErrorContainer from './FormErrorContainer'

const FormError = ({ error }: { error?: string }) => {
  if (!error) {
    return null
  }

  return <FormErrorContainer>{error}</FormErrorContainer>
}

export default FormError
