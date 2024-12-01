import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import styles from '../FormControls/FormControls.module.css'

type Props = {
  name: string
  id?: string
  value: string
  onChange?: (changeValue: Date | null) => void
  disabled?: boolean
}

const DatePickerField = ({ id, value, onChange, disabled }: Props) => {
  return (
    <DatePicker
      id={id}
      customInput={<input className={styles.fieldInput} />}
      dateFormat="dd/MM/yyyy"
      isClearable={disabled ? false : true}
      wrapperClassName="datePickerWrapper"
      popperClassName="datePickerPopper"
      selected={(value && new Date(value)) || null}
      onChange={changeValue => {
        onChange?.(changeValue as Date | null)
      }}
      disabled={disabled}
    />
  )
}

export default DatePickerField
