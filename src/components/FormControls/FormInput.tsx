/* eslint-disable @typescript-eslint/no-explicit-any */

import React from 'react'
import classnames from 'classnames'
import { getIn } from 'formik'
import { DateTime } from 'luxon'
import { sortBy } from 'lodash'

import useForm from '../Form/useForm'
import Icon from '../Icon'
import DatePicker from '../DatePicker'
import TypeAheadDropDown from '../TypeAheadDropDown'
import CheckboxDropdown from '../CheckboxDropdown'
import Switch from '../Switch'
import CheckboxRadio from '../CheckboxRadio'
import CheckboxList from '../CheckboxList'
import FuzzyFinder from '../FuzzyFinder'
import { FuzzyOptions, FuzzyFinderProps } from '../FuzzyFinder/FuzzyFinder'
import { TypeAheadOptions } from '../TypeAheadDropDown/TypeAheadDropDown'
import SlugPicker from '../SlugPicker'
import AddressAutocomplete from '../AddressAutocomplete'
import { AddressValueProps } from '../AddressAutocomplete/AddressAutocomplete'
import DropdownSelect, { DropdownSelectOption } from '../DropdownSelect/DropdownSelect'
import TileList from '../TileList'
import { CheckboxKind } from '../CheckboxRadio/CheckboxRadio'

import styles from './FormControls.module.css'

const cx = classnames.bind(styles)

const Option = ({ option }: Option) =>
  typeof option === 'string' ? (
    <option value={option}>{option}</option>
  ) : (
    <option value={option?.value}>{option?.label}</option>
  )

type Option = { value: any } | any

export type FormErrors = Record<string, string>
export type FormTouched = Record<string, boolean>

export type FormInputProps = {
  field?: {
    name?: string
    value?: any
    defaultValue?: any
  }
  type: HTMLInputElement['type']
  kind?: 'default' | 'primary' | 'light'
  mode?: 'button' | 'input'
  titlePosition?: 'left' | 'center' | 'right'
  disabled?: boolean
  isReadOnly?: boolean
  autoFocus?: boolean
  active?: boolean
  checked?: boolean
  children?: React.ReactNode
  title?: string | React.ReactNode
  hint?: string | React.ReactNode
  description?: string | React.ReactNode
  descriptionPosition?: 'top' | 'bottom'
  placeholder?: string
  originalValue?: any
  radioValue?: any
  options?: Option[]
  optionsPriority?: Option[]
  onChange?: (args: any) => void
  onClick?: (args: any) => void
  loadFn?: (inputValue: string) => Promise<any>
  maxLength?: number
  className?: string
  useDebounced?: boolean
  debounceWait?: number
  iconLeft?: string
  iconRight?: string
  hasManualMode?: boolean
  taxCountry?: string
  inputProps?: {
    min?: number | string
    step?: number | string
  }
  inputTextProps?: {
    className?: string
  }
  switchProps?: {
    reverse?: boolean
  }
  cardSelectorProps?: {
    className?: string
    maxSelectedItems?: number
  }
  businessNumberResultsCardProps?: {
    className?: string
  }
  checkboxListProps?: {
    numColumns?: number
    className?: string
  }
  tileListProps?: {
    checkboxLabelStyle?: string
    checkboxKind?: CheckboxKind
  }
  regionCheckboxDropdownProps?: {
    region: 'AU' | 'NZ'
    disabledOptions?: string[]
    checkboxKind?: CheckboxKind
  }
  form?: {
    setFieldValue?: (field: string, value: any, shouldValidate?: boolean | undefined) => void
    isSubmitting?: boolean
    touched?: FormTouched
    errors?: FormErrors
    values?: Record<string, string | number>
    initialValues?: Record<string, string | number>
  }
  prefix?: string
  isSingleChoice?: boolean
  hideEditButton?: boolean
  hideAddButton?: boolean
  alignRight?: boolean
  fuzzyFinderProps?: FuzzyFinderProps
}

/**
 * @info This component provides a set of inputs which respect certain props which Formik will pass - i.e. for form state, errors etc.
 *
 * TODO - probably refactor this, so we have separate files for each 'type'
 */

const FormInput = ({
  children,
  field = { name: '', value: '' },
  form: { isSubmitting = false, setFieldValue, touched, errors, values } = {},
  type = 'text',
  kind = 'default',
  mode = 'input',
  titlePosition = 'left',
  title,
  hint,
  description,
  descriptionPosition = 'bottom',
  originalValue = null,
  checked,
  className,
  options,
  optionsPriority,
  disabled,
  isReadOnly,
  active,
  iconLeft,
  iconRight,
  hasManualMode,
  inputProps,
  inputTextProps,
  switchProps,
  prefix,
  isSingleChoice,
  checkboxListProps,
  tileListProps,
  alignRight = false,
  fuzzyFinderProps,
  ...props
}: FormInputProps) => {
  const fieldError = field?.name && getIn(errors, field.name)
  const isTouched = field?.name && getIn(touched, field.name)

  const isError =
    Boolean(fieldError && isTouched) &&
    (type !== 'addressAutocomplete' || (type === 'addressAutocomplete' && hasManualMode === false)) // don't apply isError css class on parent component, otherwise it mucks with with the 'manual' mode for address-autocomplete
  const isUpdated = originalValue !== null && originalValue !== field?.value
  const isActive = Boolean(active)
  const { disabled: formDisabled } = useForm()
  const isDisabled = Boolean(disabled) || isSubmitting || formDisabled

  const utilityClasses = cx(
    {
      isUpdated,
      isError,
      isActive,
      isDisabled,
      hasTitle: Boolean(title),
      hasLeftIcon: Boolean(iconLeft),
      hasRightIcon: Boolean(iconRight)
    },
    {
      [styles[kind]]: true,
      [styles[type]]: true
    }
  )

  // Not very elegant, but this is to account for special case when we want to flag error of a field(s)
  // but display message elsewhere separately.
  const shouldDisplayErrorLabel = fieldError && typeof fieldError === 'string' && fieldError.trim().length > 0
  const showError = isError && shouldDisplayErrorLabel

  return (
    <div className={cx(styles.fieldOuter, utilityClasses, className)}>
      {(title || showError || hint) && (
        <div
          className={cx(
            styles.fieldTitle,
            [titlePosition],
            { isUpdated, isError, isActive },
            { [styles.isRow]: Boolean(description && descriptionPosition === 'bottom') }
          )}>
          <div className={styles.titleDescriptionContainer}>
            {title && (
              <label className={styles.fieldTitleInner} htmlFor={field?.name}>
                {title}
              </label>
            )}

            {description && descriptionPosition === 'top' && (
              <div className={classnames(styles.fieldDescription, styles.positionTop)}>{description}</div>
            )}
          </div>
          {showError && <div className={styles.fieldError}>{fieldError}</div>}

          {!showError && hint && <div className={styles.fieldTitleHint}>{hint}</div>}

          {!showError && !hint && (type === 'text' || type === 'textarea') && props.maxLength && (
            <div className={styles.fieldTitleHint}>
              {(field?.value || '').toString().length}/{props.maxLength}
            </div>
          )}
        </div>
      )}

      <div className={styles.fieldInner}>
        {iconLeft && <Icon kind={iconLeft} size={16} className={styles.iconLeft} />}

        {type == 'addressAutocomplete' && (
          <AddressAutocomplete
            {...props}
            disabled={isSubmitting || disabled}
            isTouched={isTouched}
            kind={kind === 'primary' ? 'primary' : 'default'}
            hasError={Boolean(fieldError)}
            onChange={(item: AddressValueProps | null) => {
              setFieldValue?.(field?.name || '', item)
              props.onChange?.(item)
            }}
            value={field?.value}
            name={field?.name}
            hasManualMode={hasManualMode}
          />
        )}

        {type == 'fuzzyfinder' && (
          <FuzzyFinder
            {...props}
            disabled={isDisabled}
            options={options ?? []}
            onChange={(selectedItems: FuzzyOptions) => {
              if (selectedItems) {
                setFieldValue?.(field?.name || '', selectedItems.value)
                props.onChange?.(selectedItems.value)
              }
            }}
            value={options?.filter(option => option.value === field?.value)}
            kind={kind === 'primary' ? 'primary' : 'default'}
            isError={!!fieldError}
            isTouched={isTouched}
            {...fuzzyFinderProps}
          />
        )}

        {type == 'typeahead' && (
          <TypeAheadDropDown
            {...props}
            renderAs="input"
            className={styles.fieldInput}
            isError={!!fieldError}
            id={field?.name || ''}
            value={field?.value}
            onChange={(selectedItem: TypeAheadOptions) => {
              setFieldValue && setFieldValue(field?.name || '', selectedItem.value)
              props.onChange && props.onChange(selectedItem)
            }}
            disabled={isDisabled}
            loadFn={props.loadFn}
          />
        )}

        {type === 'datepicker' && (
          <DatePicker
            {...props}
            id={field?.name || ''}
            name={field?.name || ''}
            value={field?.value}
            onChange={value => {
              const val = value ? DateTime.fromJSDate(value).toFormat('yyyy-MM-dd') : ''
              setFieldValue && setFieldValue(field?.name || '', val)
              props.onChange && props.onChange(value)
            }}
            disabled={isDisabled}
          />
        )}

        {type === 'textarea' && (
          <textarea
            className={classnames(styles.fieldInput, styles.textArea)}
            disabled={isDisabled}
            id={field?.name || ''}
            {...field}
            {...props}
          />
        )}

        {(type === 'text' || type === 'email' || type === 'password' || type == 'number') && (
          <input
            type={type}
            className={cx(styles.fieldInput, { [styles.alignRight]: alignRight }, inputTextProps?.className)}
            {...field}
            {...inputProps}
            {...props}
            id={field?.name || ''}
            value={field.value != null ? field.value : ''}
            disabled={isDisabled}
            onChange={event => {
              const value = event.currentTarget.value
              setFieldValue && setFieldValue(field?.name || '', value)
              props.onChange && props.onChange(event)
            }}
          />
        )}

        {type === 'hidden' && <input type={type} {...field} value={field.value != null ? field.value : ''} />}

        {type === 'slugpicker' && (
          <SlugPicker
            prefix={prefix}
            className={styles.fieldInput}
            {...field}
            {...inputProps}
            {...props}
            id={field?.name || ''}
            value={field.value != null ? field.value : ''}
            disabled={isDisabled}
            onChange={slug => {
              setFieldValue && setFieldValue(field?.name || '', slug)
              props.onChange && props.onChange(slug)
            }}
          />
        )}

        {type === 'select' && (
          <DropdownSelect
            {...props}
            id={field?.name || ''}
            kind={kind as 'default' | 'primary' | 'secondary'}
            mode={mode}
            value={field.value}
            optionsPriority={optionsPriority}
            options={options}
            onChange={(option: DropdownSelectOption) => {
              setFieldValue && setFieldValue(field?.name || '', option.value)
              props.onChange && props.onChange(option)
            }}
            disabled={isDisabled}
            isError={!!fieldError}
            isTouched={isTouched}
            isReadOnly={isReadOnly}
            className={styles.fieldInput}
          />
        )}

        {type === 'checkboxdropdown' && (
          <CheckboxDropdown
            {...props}
            options={sortBy(options, [val => val.value.toLowerCase()], ['desc'])}
            id={field?.name || ''}
            name={field?.name || ''}
            kind={kind}
            value={(field?.value || []).map((v: any) => {
              return { value: v }
            })}
            onChange={(selectedItems: Option) => {
              if (isSingleChoice) {
                if (field.value && selectedItems.value === field.value[0]) {
                  // Unselect item
                  setFieldValue && setFieldValue(field?.name || '', [])
                  props.onChange && props.onChange([])
                } else {
                  // Select item
                  setFieldValue && setFieldValue(field?.name || '', [selectedItems.value])
                  props.onChange && props.onChange([selectedItems.value])
                }
              } else {
                const values = selectedItems.map((i: Option) => i.value)
                setFieldValue && setFieldValue(field?.name || '', values)
                props.onChange && props.onChange(values)
              }
            }}
            isSingleChoice={isSingleChoice}
            isDisabled={isSubmitting || disabled}
          />
        )}

        {type === 'checkbox' && (
          <CheckboxRadio
            className={styles.checkRadio}
            type={type}
            kind={kind}
            id={field?.name || ''}
            name={field?.name || ''}
            disabled={isDisabled}
            checked={Boolean(field?.value)}
            onClick={props.onClick}
            onChange={event => {
              setFieldValue && setFieldValue(field?.name || '', !field?.value)
              props.onChange && props.onChange(event)
            }}
            label={children}
          />
        )}

        {type === 'radio' && (
          <CheckboxRadio
            className={styles.checkRadio}
            type={type}
            kind={kind}
            id={field?.name || ''}
            name={field?.name || ''}
            disabled={isDisabled}
            checked={checked || values?.[field?.name || ''] === field?.value}
            onClick={props.onClick}
            onChange={event => {
              setFieldValue && setFieldValue(field?.name || '', field?.value)
              props.onChange && props.onChange(event)
            }}
            label={children}
          />
        )}

        {type === 'tilelist' && (
          <TileList
            name={field?.name || ''}
            onChange={selectedItems => {
              setFieldValue && setFieldValue(field?.name || '', selectedItems)
              props.onChange && props.onChange(selectedItems)
            }}
            options={options ? options : []}
            disabled={isDisabled}
            value={field?.value || []}
            onClick={props.onClick}
            checkboxLabelStyle={tileListProps?.checkboxLabelStyle}
            checkboxKind={tileListProps?.checkboxKind}
          />
        )}

        {type === 'checkboxlist' && (
          <CheckboxList
            name={field?.name || ''}
            onChange={selectedItems => {
              setFieldValue && setFieldValue(field?.name || '', selectedItems)
              props.onChange && props.onChange(selectedItems)
            }}
            options={options ? options : []}
            disabled={isDisabled}
            value={field?.value || []}
            onClick={props.onClick}
            numColumns={checkboxListProps?.numColumns}
            className={checkboxListProps?.className}
          />
        )}

        {type === 'switch' && (
          <Switch
            id={field.name || ''}
            name={field.name || ''}
            disabled={isDisabled}
            checked={checked || field?.value === (switchProps?.reverse ? false : true)}
            onClick={event => {
              setFieldValue?.(field?.name || '', !field?.value)
              props?.onClick?.(event)
            }}
            onChange={props.onChange || (() => undefined)}
            label={children}
          />
        )}

        {iconRight && <Icon kind={iconRight} size={16} className={styles.iconRight} />}
      </div>

      {description && descriptionPosition === 'bottom' && (
        <div className={classnames(styles.fieldDescription, styles.positionBottom)}>{description}</div>
      )}
    </div>
  )
}

export default FormInput
