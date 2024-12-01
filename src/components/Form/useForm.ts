import { useContext } from 'react'
import { FormContext } from '../Form/Form'

export const useForm = () => useContext(FormContext)

export default useForm
