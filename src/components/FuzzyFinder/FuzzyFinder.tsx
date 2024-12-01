import { useState, useEffect, CSSProperties } from 'react'
import AsyncSelect from 'react-select/async'
import {
  components,
  ControlProps,
  OptionProps,
  MenuProps,
  IndicatorsContainerProps,
  MenuListProps,
  ValueContainerProps,
  ClearIndicatorProps,
  DropdownIndicatorProps,
  IndicatorSeparatorProps,
  ContainerProps
} from 'react-select'
import Fuse from 'fuse.js'
import { FixedSizeList as List } from 'react-window'
import debounce from 'debounce-promise'
import Icon from '../Icon'
import classnames from 'classnames'

import styles from './FuzzyFinder.module.css'

export type FuzzyOptions = {
  value: string
  label: string
}

// 'react-select' Custom Components:
const CustomClearIndicator = (props: ClearIndicatorProps) => {
  const {
    children = <Icon kind="x" size={16} className={styles.dismiss} />,
    getStyles,
    innerProps: { ref, ...restInnerProps }
  } = props
  return (
    <div {...restInnerProps} ref={ref} style={getStyles('clearIndicator', props) as CSSProperties}>
      <div className={styles.clearIcon}>{children}</div>
    </div>
  )
}
const CustomOption = ({ children, ...props }: OptionProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { onMouseMove, onMouseOver, ...rest } = props.innerProps
  const newProps = { ...props, innerProps: rest }
  return (
    <components.Option {...newProps} className={styles.customOption}>
      {children}
    </components.Option>
  )
}
const OPTION_HEIGHT = 42
const MENU_LIST_WIDTH = 742
const MENU_LIST_HEIGHT = 338
const ROWS = 9
const CustomMenuList = ({ options, children, getValue }: MenuListProps) => {
  const [value] = getValue()
  const initialOffset =
    options.indexOf(value) !== -1
      ? Array.isArray(children) && children.length >= ROWS
        ? options.indexOf(value) >= ROWS
          ? options.indexOf(value) * OPTION_HEIGHT - OPTION_HEIGHT * 5
          : 0
        : 0
      : 0
  return Array.isArray(children) ? (
    <List
      className={styles.customMenuList}
      width={MENU_LIST_WIDTH}
      // height={children.length >= ROWS ? OPTION_HEIGHT * ROWS : children.length * OPTION_HEIGHT}
      height={MENU_LIST_HEIGHT}
      itemCount={children.length}
      itemSize={OPTION_HEIGHT}
      initialScrollOffset={initialOffset}>
      {({ style, index }) => {
        return <div style={style}>{children[index]}</div>
      }}
    </List>
  ) : (
    <div>{children}</div>
  )
}

export type FuzzyFinderProps = {
  className?: string
  placeholder?: string
  debounceWait?: number
  disabled?: boolean
  autoFocus?: boolean
  options: FuzzyOptions[]
  // Set type to 'any' to avoid conflict type with FormInput's 'onChange' prop
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange?: any
  value?: FuzzyOptions | unknown
  kind?: 'default' | 'primary'
  isError?: boolean
  isTouched?: boolean
  showId?: boolean
}

// Fuse fuzzy finder config settings
const fuzzyOptions = {
  keys: [
    { name: 'name', weight: 0.6 },
    { name: 'label', weight: 1.0 }
  ],
  maxPatternLength: 12,
  includeScore: true,
  maxResults: 12,
  includeMatches: true,
  isCaseSensitive: false,
  findAllMatches: true,
  ignoreLocation: true
}

const FuzzyFinder = ({
  className,
  placeholder,
  debounceWait = 250,
  disabled,
  autoFocus,
  options,
  onChange,
  value,
  kind,
  isError,
  isTouched,
  showId = true
}: FuzzyFinderProps) => {
  const [fuse, setFuse] = useState<Fuse<FuzzyOptions>>()

  const LeftIcon = ({ children, ...props }: ControlProps) => {
    return (
      <components.Control {...props}>
        {props.hasValue && !props.menuIsOpen ? (
          <Icon
            className={styles.leftIcon}
            kind="check-circle"
            size={16}
            color={disabled ? 'var(--colorGreen4)' : 'var(--colorGreen7)'}
          />
        ) : (
          <Icon className={styles.leftIcon} kind="search" size={16} />
        )}
        {children}
      </components.Control>
    )
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const formatOptionLabel = ({ value, label }: any) => {
    const lastIndex = label.lastIndexOf('>')
    const index = lastIndex > -1 ? lastIndex + 2 : 0
    return (
      <>
        {label.slice(0, index)}{' '}
        <strong className={classnames(styles.optionName, { [styles.disabled]: disabled })}>
          {label.slice(index, label.length)}
        </strong>
        {showId && <> (ID: {value})</>}
      </>
    )
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const customStyles: any = {
    control: (provided: ControlProps) => ({
      ...provided,
      backgroundColor: disabled ? 'var(--colorGray1)' : 'var(--colorWhite)',
      border: 0,
      boxShadow: 'none',
      minHeight: '30px'
    }),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    container: (provided: ContainerProps, { isFocused }: any) => ({
      ...provided,
      border: !isFocused
        ? '1px solid var(--colorGray3)'
        : kind === 'primary'
          ? '1px solid var(--colorBlue)'
          : '1px solid var(--colorBlack)',
      boxShadow: !isFocused
        ? ''
        : kind === 'primary'
          ? '0 0 0 4px var(--colorBlueFade)'
          : '0 0 0 4px var(--colorGray2)',
      outline: isFocused && '0 none',
      borderRadius: 2
    }),
    menu: (provided: MenuProps) => ({
      ...provided,
      position: 'absolute',
      width: 'auto',
      minWidth: MENU_LIST_WIDTH,
      backgroundColor: 'white',
      boxShadow: '0 8px 32px rgb(0, 0, 0, 0.18)',
      borderRadius: 2,
      zIndex: 100
    }),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    option: (provided: OptionProps, { isSelected, isFocused, isDisabled }: any) => ({
      ...provided,
      backgroundColor: isSelected ? '' : isFocused ? 'var(--colorGray1)' : 'var(--colorWhite)',
      color: 'var(--colorGray8)',
      '&:hover': {
        backgroundColor: 'var(--colorGray1)'
      },
      cursor: isDisabled ? 'not-allowed' : 'pointer'
    }),
    indicatorsContainer: (provided: IndicatorsContainerProps) => ({
      ...provided,
      cursor: 'pointer',
      maxHeight: '30px'
    }),
    dropdownIndicator: (provided: DropdownIndicatorProps) => ({
      ...provided,
      display: 'none'
    }),
    indicatorSeparator: (provided: IndicatorSeparatorProps) => ({
      ...provided,
      display: 'none'
    }),
    input: () => ({
      gridArea: '1/1/2/3',
      gridTemplateColumns: '0 min-content',
      color: 'var(--colorBlack)'
    }),
    menuList: (provided: MenuListProps) => ({
      ...provided,
      '::-webkit-scrollbar': {
        width: '0px',
        height: '0px'
      },
      width: MENU_LIST_WIDTH
    }),
    valueContainer: (provided: ValueContainerProps) => ({
      ...provided,
      whiteSpace: 'unset',
      overflowWrap: 'break-word',
      wordBreak: 'break-word',
      alignItems: 'center',
      display: 'grid',
      flex: 1,
      flexWrap: 'wrap',
      padding: '0',
      position: 'relative',
      overflow: 'hidden'
    })
  }

  const searchOptions = (
    inputValue: string,
    // TODO: use proper type for callback
    // callback: (options: OptionsOrGroups<unknown, GroupBase<unknown>>) => void
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    callback: any
  ) => {
    if (!inputValue) {
      return callback([])
    }

    fuse && callback(fuse?.search(inputValue)?.map(c => ({ label: c.item.label, value: c.item.value })))
  }

  useEffect(() => {
    const newOptions = options.map(option => ({
      ...option,
      name: option.label.replace(/ /g, '')
    }))
    setFuse(new Fuse(newOptions, fuzzyOptions))
    return () => setFuse(undefined)
  }, [options])

  useEffect(() => {
    if (fuse) {
      fuse.setCollection(options)
    }
  }, [fuse, options])

  return (
    <AsyncSelect
      className={classnames(className, styles.container, styles.fuzzySelect, {
        [styles.isError]: isError && isTouched
      })}
      styles={customStyles}
      components={{
        Control: LeftIcon,
        ClearIndicator: CustomClearIndicator,
        Option: CustomOption,
        MenuList: CustomMenuList
      }}
      placeholder={placeholder}
      defaultOptions={options}
      loadOptions={debounce(searchOptions, debounceWait)}
      formatOptionLabel={formatOptionLabel}
      isDisabled={disabled}
      autoFocus={autoFocus}
      onChange={selectedValue => {
        if (selectedValue === null) {
          onChange({
            value: null,
            label: ''
          })
        } else {
          onChange(selectedValue)
        }
      }}
      value={value}
      isClearable
      blurInputOnSelect
      // menuIsOpen
    />
  )
}

export default FuzzyFinder
