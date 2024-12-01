import Select, {
  components,
  ContainerProps,
  ControlProps,
  DropdownIndicatorProps,
  GroupProps,
  MenuListProps,
  MenuProps,
  OptionProps,
  PlaceholderProps,
  ValueContainerProps
} from 'react-select'
import classnames from 'classnames'

import Icon from '../Icon'

import styles from './DropdownSelect.module.css'

export type DropdownSelectOption = { label: string; value: string }

type SelectProps = {
  className?: string
  id?: string
  value?: string | undefined
  disabled?: boolean
  onChange?: (selectedItem: DropdownSelectOption) => void
  placeholder?: string
  optionsPriority?: DropdownSelectOption[]
  options?: DropdownSelectOption[] | undefined
  kind?: 'default' | 'primary' | 'secondary'
  mode?: 'button' | 'input'
  isError?: boolean
  isTouched?: boolean
  addBottomBorder?: string // nth element. Can also accept (an + b). `a` represents a cycle size, `n` is a counter (starts at 0), and `b` is an offset value.
  isReadOnly?: boolean // Is just a `disabled` state, without the change in opacity
}

const DropdownSelect = ({
  className,
  value,
  disabled = false,
  onChange,
  placeholder = '',
  optionsPriority,
  options,
  kind = 'default',
  mode = 'input',
  isError,
  isTouched,
  addBottomBorder,
  isReadOnly = false
}: SelectProps) => {
  const cx = classnames.bind(styles)
  const kindArray = ['default', 'primary', 'secondary']
  const selectKind = kindArray.includes(kind) ? kind : 'default'

  const CustomDropdownIndicator = (props: DropdownIndicatorProps) => {
    const { menuIsOpen } = props.selectProps
    const kind = menuIsOpen ? 'chevron-up' : 'chevron-down'

    return (
      <components.DropdownIndicator {...props}>
        <Icon kind={kind} size={20} />
      </components.DropdownIndicator>
    )
  }
  const CustomGroup = (props: GroupProps) => {
    return (
      <div>
        <components.Group {...props} className={styles.customGroup}>
          {props.children}
        </components.Group>
      </div>
    )
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let dropdownOptions: any
  if (options) {
    if (optionsPriority) {
      dropdownOptions = [
        ...optionsPriority,
        {
          label: '—',
          value: '',
          disabled: true
        },
        ...options
      ]
    } else {
      dropdownOptions = options
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const inputStyles: any = {
    default: {
      container: (provided: ContainerProps, { isFocused }: ContainerProps) => ({
        ...provided,
        border: !isFocused ? '1px solid var(--colorGray3)' : '1px solid var(--colorBlack2)',
        boxShadow: !isFocused
          ? ''
          : isError && isTouched
            ? '0 0 0 4px var(--colorRedFade)'
            : '0 0 0 4px var(--colorBlackFade)',
        outline: isFocused && '0 none',
        borderRadius: '2px',
        boxSizing: 'border-box'
      }),
      control: (provided: ControlProps) => ({
        ...provided,
        backgroundColor: 'white',
        color: 'var(--colorBlack2)',
        borderStyle: 'none',
        borderWidth: 0,
        boxShadow: 'none',
        minHeight: '30px',
        borderRadius: '2px',
        boxSizing: 'content-box',
        '&:hover': {
          borderColor: 'var(--colorGray3)'
        }
      }),
      placeholder: (provided: PlaceholderProps) => ({
        ...provided,
        color: mode === 'button' ? 'var(--colorBlack2)' : 'var(--colorGray6)',
        fontWeight: mode === 'button' ? '500' : '400'
      }),
      dropdownIndicator: (provided: DropdownIndicatorProps) => ({
        ...provided,
        color: 'var(--colorBlack2)',
        padding: '5px'
      }),
      indicatorSeparator: () => ({
        display: 'none'
      }),
      indicatorsContainer: () => ({
        paddingRight: mode === 'input' ? '0' : '8px'
      }),
      menu: (provided: MenuProps) => ({
        ...provided,
        width: 'max-content',
        minWidth: '100%',
        marginTop: '4px'
      }),
      menuList: (provided: MenuListProps) => ({
        ...provided,
        padding: 0,
        '::-webkit-scrollbar': {
          width: '0px',
          height: '0px'
        },
        [`& :nth-of-type(${addBottomBorder})`]: {
          borderBottom: '1px solid var(--colorGray2)',
          marginTop: '8px',
          marginBottom: '16px'
        }
      }),
      option: (provided: OptionProps, { isSelected }: OptionProps) => ({
        ...provided,
        backgroundColor: isSelected ? 'var(--colorGray2)' : '',
        color: 'var(--colorBlack2)',
        '&:hover': {
          backgroundColor: 'var(--colorGray2)'
        }
      }),
      valueContainer: (provided: ValueContainerProps) => ({
        ...provided,
        color: 'var(--colorBlack2)',
        fontWeight: mode === 'button' ? '500' : '400',
        paddingLeft: mode === 'input' ? '8px' : '16px'
      })
    },
    primary: {
      container: (provided: ContainerProps, { isFocused }: PlaceholderProps) => ({
        ...provided,
        border: !isFocused ? '1px solid var(--colorGray3)' : '1px solid var(--colorBlue)',
        boxShadow: !isFocused
          ? ''
          : isError && isTouched
            ? '0 0 0 4px var(--colorRedFade)'
            : '0 0 0 4px var(--colorBlueFade)',
        outline: isFocused && '0 none',
        borderRadius: '2px',
        boxSizing: 'border-box'
      }),
      control: (provided: ControlProps, { isFocused }: PlaceholderProps) => ({
        ...provided,
        backgroundColor: mode === 'button' ? (isFocused ? 'var(--colorBlue10)' : 'var(--colorBlue8)') : 'white',
        borderColor: mode === 'button' ? (isFocused ? 'var(--colorBlue10)' : 'var(--colorBlue8)') : 'var(--colorGray3)',
        borderWidth: 0,
        boxShadow: 'none',
        minHeight: '30px',
        borderRadius: '2px',
        boxSizing: 'content-box',
        '&:hover': {
          backgroundColor: mode === 'button' ? (isFocused ? 'var(--colorBlue10)' : 'var(--colorBlue9)') : 'white',
          borderColor: 'var(--colorGray3)'
        }
      }),
      placeholder: (provided: PlaceholderProps) => ({
        ...provided,
        color: mode === 'button' ? 'white' : 'var(--colorGray6)',
        fontWeight: mode === 'button' ? '500' : '400'
      }),
      dropdownIndicator: (provided: DropdownIndicatorProps) => ({
        ...provided,
        color: mode === 'button' ? 'white' : 'var(--colorBlack2)',
        '&:hover': {
          color: mode === 'button' ? 'white' : 'var(--colorBlack2)'
        },
        padding: '5px'
      }),
      indicatorSeparator: () => ({
        display: 'none'
      }),
      indicatorsContainer: () => ({
        paddingRight: mode === 'input' ? '0' : '8px'
      }),
      menu: (provided: MenuProps) => ({
        ...provided,
        width: 'max-content',
        minWidth: '100%',
        marginTop: '4px'
      }),
      menuList: (provided: MenuListProps) => ({
        ...provided,
        padding: 0,
        '::-webkit-scrollbar': {
          width: '0px',
          height: '0px'
        },
        [`& :nth-of-type(${addBottomBorder})`]: {
          borderBottom: '1px solid var(--colorGray2)',
          marginTop: '8px',
          marginBottom: '16px'
        }
      }),
      option: (provided: OptionProps, { isSelected }: OptionProps) => ({
        ...provided,
        backgroundColor: isSelected ? 'var(--colorGray2)' : '',
        color: 'var(--colorBlack2)',
        '&:hover': {
          backgroundColor: 'var(--colorGray2)'
        }
      }),
      valueContainer: (provided: ValueContainerProps) => ({
        ...provided,
        color: mode === 'button' ? 'white' : 'var(--colorBlack2)',
        fontWeight: mode === 'button' ? '500' : '400',
        paddingLeft: mode === 'input' ? '8px' : '16px'
      }),
      singleValue: (provided: ValueContainerProps) => ({
        ...provided,
        color: mode === 'button' ? 'white' : 'var(--colorBlack2)'
      })
    },
    secondary: {
      container: (provided: ContainerProps, { isFocused }: ContainerProps) => ({
        ...provided,
        border: !isFocused ? '1px solid var(--colorGray2)' : '1px solid var(--colorBlack2) !important',
        boxShadow: !isFocused
          ? ''
          : isError && isTouched
            ? '0 0 0 4px var(--colorRedFade)'
            : '0 0 0 4px var(--colorBlackFade)',
        outline: isFocused && '0 none',
        borderRadius: '2px',
        boxSizing: 'border-box'
      }),
      control: (provided: ControlProps, { isFocused }: ContainerProps) => ({
        ...provided,
        backgroundColor: mode === 'button' ? (isFocused ? 'var(--colorGray12)' : 'var(--colorGray2)') : 'white',
        color: mode === 'button' ? (isFocused ? 'white' : 'var(--colorBlack2)') : 'var(--colorBlack2)',
        border: 0,
        borderWidth: 0,
        boxShadow: 'none',
        minHeight: '30px',
        borderRadius: '2px',
        boxSizing: 'content-box',
        '&:hover': {
          color: mode === 'button' ? 'white' : 'var(--colorBlack2)',
          backgroundColor: mode === 'button' ? (isFocused ? 'var(--colorGray12)' : 'var(--colorGray11)') : undefined,
          borderColor: mode === 'button' ? (isFocused ? 'var(--colorGray12)' : 'var(--colorGray11)') : undefined
        }
      }),
      placeholder: (provided: PlaceholderProps, { isFocused }: ContainerProps) => ({
        ...provided,
        color: mode === 'button' ? (isFocused ? 'white' : 'inherit') : 'var(--colorGray6)',
        fontWeight: mode === 'button' ? '500' : '400'
      }),
      dropdownIndicator: (provided: DropdownIndicatorProps, { isFocused }: ContainerProps) => ({
        ...provided,
        color: mode === 'button' && isFocused ? 'white' : 'inherit',
        padding: '5px',
        '&:hover': {
          color: 'inherit'
        },
        transition: styles.noTransition
      }),
      indicatorSeparator: () => ({
        display: 'none'
      }),
      indicatorsContainer: () => ({
        paddingRight: mode === 'input' ? '0' : '8px'
      }),
      menu: (provided: MenuProps) => ({
        ...provided,
        width: 'max-content',
        minWidth: '100%',
        marginTop: '4px'
      }),
      menuList: (provided: MenuListProps) => ({
        ...provided,
        padding: 0,
        '::-webkit-scrollbar': {
          width: '0px',
          height: '0px'
        },
        [`& :nth-of-type(${addBottomBorder})`]: {
          borderBottom: '1px solid var(--colorGray2)',
          marginTop: '8px',
          marginBottom: '16px'
        }
      }),
      option: (provided: OptionProps, { isSelected }: OptionProps) => ({
        ...provided,
        backgroundColor: isSelected ? 'var(--colorGray2)' : '',
        color: 'var(--colorBlack2)',
        '&:hover': {
          backgroundColor: 'var(--colorGray2)'
        }
      }),
      valueContainer: (provided: ValueContainerProps, { isFocused }: ContainerProps) => ({
        ...provided,
        color: mode === 'button' && isFocused ? 'white' : 'inherit',
        fontWeight: mode === 'button' ? '500' : '400',
        paddingLeft: mode === 'input' ? '8px' : '16px'
      }),
      singleValue: (provided: ValueContainerProps, { isFocused }: ContainerProps) => ({
        ...provided,
        color: mode === 'button' && isFocused ? 'white' : 'inherit'
      })
    }
  }

  const handleOnChange = (selectedItem: DropdownSelectOption) => {
    if (selectedItem) {
      onChange && onChange(selectedItem)
    }
  }

  return (
    <Select
      className={cx(styles.container, className, {
        [styles.disabled]: disabled,
        [styles.isError]: isError && isTouched
      })}
      styles={inputStyles[selectKind]}
      components={{ DropdownIndicator: CustomDropdownIndicator, Group: CustomGroup }}
      placeholder={placeholder}
      isDisabled={disabled || isReadOnly}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      isOptionDisabled={(option: any) => option.disabled}
      isSearchable={false}
      isClearable={false}
      value={value ? dropdownOptions.find((item: { value: string }) => item.value === value) : placeholder}
      options={dropdownOptions}
      onChange={handleOnChange}
      blurInputOnSelect
    />
  )
}

export default DropdownSelect
