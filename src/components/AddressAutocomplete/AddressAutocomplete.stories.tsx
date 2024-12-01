import { Meta } from '@storybook/react'
import AddressAutocomplete from './AddressAutocomplete'
import styles from './AddressAutocomplete.stories.module.css'

export default {
  title: 'Components/AddressAutocomplete',
  component: AddressAutocomplete,
  includeStories: ['Examples']
} as Meta<typeof AddressAutocomplete>

export const Examples = () => {
  return (
    <div className={styles.container}>
      <AddressAutocomplete />
    </div>
  )
}
