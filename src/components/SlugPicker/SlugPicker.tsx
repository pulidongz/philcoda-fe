import { useRef, useState, useEffect, useCallback, HTMLProps, ChangeEvent } from 'react'
import classnames from 'classnames'

import { slugifyString } from './helpers/slugifyString'
import styles from './SlugPicker.module.css'

type SlugPickerProps = Omit<HTMLProps<HTMLInputElement>, 'type' | 'onChange'> & {
  prefix?: string
  onChange?: (slug: string) => void
}

const SlugPicker = ({ prefix, className, value, onChange, id, name, ...rest }: SlugPickerProps) => {
  const prefixRef = useRef<HTMLLabelElement>(null)
  const [paddingLeft, setPaddingLeft] = useState(200)

  useEffect(() => {
    setPaddingLeft((prefixRef?.current?.offsetWidth ?? 200) - 2)
  }, [prefix])

  const convertToSlug = useCallback(
    (event: ChangeEvent<HTMLInputElement> | undefined, allowTrailingHyphen: boolean) => {
      onChange?.(slugifyString(event?.target.value, allowTrailingHyphen))
    },
    [onChange]
  )

  return (
    <div className={styles.container}>
      {prefix && (
        <label
          className={classnames(styles.prefix, { [styles.hasValue]: !!value })}
          ref={prefixRef}
          htmlFor={id || name}>
          {prefix}
        </label>
      )}
      <input
        type="text"
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck={false}
        value={value}
        id={id}
        name={name}
        {...rest}
        className={classnames(styles.input, className)}
        onChange={e => convertToSlug(e, true)}
        onBlur={e => convertToSlug(e, false)}
        style={{
          paddingLeft
        }}
      />
    </div>
  )
}

export default SlugPicker
