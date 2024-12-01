import React from 'react'
import classnames from 'classnames'
import styles from './FormControls.module.css'

const FormErrorContainer = ({ className, children, ...props }: { className?: string; children?: React.ReactNode }) => (
  <div className={classnames(styles.formErrorContainer, 'form-error', className)} {...props}>
    {children}
  </div>
)

export default FormErrorContainer
