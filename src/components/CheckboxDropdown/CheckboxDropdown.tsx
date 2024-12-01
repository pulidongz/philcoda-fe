import Select, {
  Props,
  GroupBase,
  components,
  ControlProps,
  PlaceholderProps,
  DropdownIndicatorProps,
  MenuProps
} from 'react-select'
import classnames from 'classnames'
import styles from './CheckboxDropdown.module.css'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Option = (props: any) => {
  return (
    <div>
      <components.Option {...props}>
        <input type="checkbox" checked={props.isSelected} onChange={() => null} /> <label>{props.label}</label>
      </components.Option>
    </div>
  )
}

type CustomProps = {
  className?: string
  title?: string
  kind?: 'default' | 'light' | 'primary'
  isSingleChoice?: boolean
}

function CheckboxDropdown<Option, IsMulti extends boolean = true, Group extends GroupBase<Option> = GroupBase<Option>>({
  className,
  title,
  kind,
  value,
  isSingleChoice = false,
  ...props
}: Props<Option, IsMulti, Group> & CustomProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const inputStyles: any = {
    default: {
      control: (provided: ControlProps) => ({
        ...provided,
        backgroundColor: 'var(--colorGray2)',
        color: 'var(--colorBlack2)',
        border: 0,
        boxShadow: 'none',
        minHeight: '32px',
        borderRadius: '2px'
      }),
      placeholder: (provided: PlaceholderProps) => ({
        ...provided,
        color: 'var(--colorBlack2)',
        fontWeight: '500'
      }),
      dropdownIndicator: (provided: DropdownIndicatorProps) => ({
        ...provided,
        color: 'var(--colorBlack2)',
        padding: '6px'
      }),
      indicatorSeparator: () => ({}),
      menu: (provided: MenuProps) => ({
        ...provided,
        minWidth: '200px'
      })
    },
    light: {
      control: (provided: ControlProps) => ({
        ...provided,
        backgroundColor: 'white',
        color: 'var(--colorBlack2)',
        borderColor: 'var(--colorGray3)',
        boxShadow: 'none',
        minHeight: '32px',
        borderRadius: '2px',
        '&:hover': {
          borderColor: 'var(--colorGray3)'
        }
      }),
      placeholder: (provided: PlaceholderProps) => ({
        ...provided,
        color: 'var(--colorBlack2)',
        fontWeight: '500'
      }),
      dropdownIndicator: (provided: DropdownIndicatorProps) => ({
        ...provided,
        color: 'var(--colorBlack2)',
        padding: '6px'
      }),
      indicatorSeparator: () => ({}),
      menu: (provided: MenuProps) => ({
        ...provided,
        minWidth: '200px'
      })
    }
  }

  return (
    <Select
      className={classnames(styles.container, className)}
      isMulti={!isSingleChoice as IsMulti}
      controlShouldRenderValue={false}
      closeMenuOnSelect={false}
      hideSelectedOptions={false}
      components={{ Option }}
      isSearchable={false}
      isClearable={false}
      placeholder={title}
      styles={inputStyles[kind || 'default']}
      value={value}
      {...props}
    />
  )
}

export default CheckboxDropdown
