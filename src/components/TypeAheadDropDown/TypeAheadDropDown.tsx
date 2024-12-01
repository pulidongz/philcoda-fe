/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useState } from 'react'
import { OptionProps } from 'react-select'
import AsyncSelect from 'react-select/async'

export type TypeAheadOptions = {
  value: string
  label: string
}

type TypeAheadDropDownProps = {
  loadFn: ((inputValue: string) => Promise<any>) | undefined
  onChange?: any
  isError?: boolean
  className?: string
  id?: string
  value?: any
  disabled?: boolean
  renderAs?: string
}

const TypeAheadDropDown = ({
  loadFn,
  id,
  onChange,
  className,
  value,
  disabled,
  renderAs = 'select',
  ...props
}: TypeAheadDropDownProps) => {
  const [typeAheadValue, setTypeAheadValue] = useState<string>(value)

  const customInputStyles: any = {
    indicatorsContainer: (provided: any) => ({
      ...provided,
      display: 'none'
    }),
    control: () => ({
      border: 0,
      backgroundColor: disabled && 'var(--colorGray1)'
    }),
    valueContainer: () => ({
      alignItems: 'center',
      display: 'grid',
      flex: 1,
      flexWrap: 'wrap',
      padding: '0',
      position: 'relative',
      overflow: 'hidden'
    }),
    input: () => ({
      gridArea: '1/1/2/3',
      gridTemplateColumns: '0 min-content',
      color: 'hsl(0, 0%, 20%)'
    }),
    container: (_provided: any, state: any) => ({
      backgroundColor: disabled && 'var(--colorGray1)',
      borderColor: state.isFocused && 'hsl(216, 94%, 56%)',
      boxShadow: state.isFocused && '0 0 0 4px var(--colorBlueFade)',
      outline: state.isFocused && '0 none'
    }),
    option: (provided: OptionProps, { isDisabled }: any) => ({
      ...provided,
      cursor: isDisabled ? 'not-allowed' : 'pointer'
    })
  }

  useEffect(() => {
    const fetchOptionsList = async () => {
      if (loadFn) {
        const options = await loadFn('')
        const result = options?.filter((option: { value: any }) => option.value === value)
        setTypeAheadValue(result)
      }
    }

    fetchOptionsList()
  }, [loadFn, value])

  return (
    <AsyncSelect
      className={className}
      id={id}
      cacheOptions
      value={typeAheadValue}
      defaultOptions
      styles={renderAs === 'input' ? customInputStyles : undefined}
      loadOptions={loadFn}
      isDisabled={disabled}
      onChange={selectedItem => onChange(selectedItem)}
      {...props}
    />
  )
}

export default TypeAheadDropDown
