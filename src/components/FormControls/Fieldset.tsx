import classnames from 'classnames'

import useForm from '../Form/useForm'

export type FieldsetProps = {
  id?: string
  children?: React.ReactNode
  title?: string | React.ReactNode
  subtitle?: string | React.ReactNode
  className?: string
  disabled?: boolean // disabling a fieldset, should also disable all inputs inside of it
}

const Fieldset = ({ id, children, title, subtitle, className, disabled }: FieldsetProps) => {
  const { disabled: formDisabled } = useForm()
  return (
    <fieldset id={id} className={classnames('fieldset', className)} disabled={disabled || formDisabled}>
      {(title || subtitle) && (
        <div className="fieldsetTitle">
          {title}
          {subtitle && <p className="fieldsetSubtitle">{subtitle}</p>}
        </div>
      )}
      {children && children}
    </fieldset>
  )
}

export default Fieldset
