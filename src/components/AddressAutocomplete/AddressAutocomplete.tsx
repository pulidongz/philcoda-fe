import { ChangeEvent, useEffect, useState, useCallback } from 'react'
import GooglePlacesAutocomplete, {
  geocodeByPlaceId,
  getLatLng,
  geocodeByLatLng
} from 'react-google-places-autocomplete'
import { SingleValue } from 'react-select'
import classnames from 'classnames'

import Button from '../Button'
import { ButtonProps } from '../Button/Button'
import { FormField } from '../FormControls'

const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY

type LatLongArgs = {
  lat: string
  lng: string
}

export type AddressValueProps = {
  id?: string
  street1: string
  street2?: string | null
  city?: string
  province?: string
  country?: string
  postcode?: string
  latitude?: string
  longitude?: string
}

type GoogleAutocompleteProps = {
  label: string
  value: {
    description: string
    matched_substrings: [
      {
        length: number
        offset: number
      }
    ]
    place_id: string
    reference: string
    structured_formatting: {
      main_text: string
      main_text_matched_substrings: [
        {
          length: number
          offset: number
        }
      ]
      secondary_text: string
    }
    terms: [
      {
        offset: number
        value: string
      }
    ]
    types: [string]
  }
} & AddressValueProps

type AddressAutocompleteProps = {
  className?: string
  name?: string
  placeOnly?: boolean
  hasManualMode?: boolean
  restrictCountries?: string | string[]
  placeholder?: string
  disabled?: boolean
  value?: AddressValueProps
  kind?: 'default' | 'primary'
  onChange?: (item: AddressValueProps | null) => void
  hasError?: boolean
  isTouched?: boolean
  maxMenuHeight?: number
} & ButtonProps

const AddressAutocomplete = ({
  className,
  name = 'name',
  placeOnly = false,
  hasManualMode = true,
  restrictCountries,
  placeholder = 'Enter a location',
  disabled,
  value,
  kind = 'primary',
  onChange,
  isSubmitting,
  hasError,
  isTouched,
  maxMenuHeight
}: AddressAutocompleteProps) => {
  const [addressId, setAddressId] = useState<string | undefined>(value?.id ?? undefined)
  const [isLatLongMode, setIsLatLongMode] = useState<boolean>(false)

  // Used to display fieldset label-value
  const [addressValue, setAddressValue] = useState<{
    label: string
    value: AddressValueProps
  }>()
  // Google address, contains place_id and other google address fields
  const [googleAddress, setGoogleAddress] = useState<GoogleAutocompleteProps>()

  const resetAddresses = () => {
    setAddressValue(undefined)
    setGoogleAddress(undefined)
  }

  // Helper functions
  const generateLabelForGoogleAddress = (value: AddressValueProps | undefined) => {
    const v = value as AddressValueProps

    const addressLabel = `${v?.street1 ? `${v.street1}, ` : ''}${v?.street2 ? `${v?.street2}, ` : ''}${
      v?.city ? `${v.city}, ` : ''
    }${v?.province ? `${v.province}, ` : ''}${v?.country}`

    return addressLabel
  }

  const parseGoogleAddress = useCallback(
    async (address: GoogleAutocompleteProps) => {
      const latLong: LatLongArgs = await getLatLong(address.value.place_id)

      return {
        id: value?.id,
        street1: address.value.structured_formatting.main_text,
        street2: undefined,
        city: address?.value?.terms?.slice(-3)[0]?.value,
        province: address?.value?.terms?.slice(-2)[0]?.value,
        postcode: (await getPostCode(address?.value?.place_id)) as string,
        country: address?.value?.terms?.slice(-1)[0]?.value,
        latitude: latLong.lat,
        longitude: latLong.lng
      }
    },
    [value?.id]
  )

  const parseAddressFromLatLong = useCallback(
    async (lat: string, lng: string) => {
      const address = await getAddressFromLatLong(lat, lng)

      // console.log('address: ', address)

      return {
        id: value?.id,
        street1: address?.address_components?.[1]?.long_name,
        street2: undefined,
        city: address.address_components.slice(-4)[0]?.long_name,
        province: address?.address_components.slice(-3)[0]?.long_name,
        country: address?.address_components.slice(-1)[0]?.long_name,
        postcode: (await getPostCode(address.place_id)) as string,
        latitude: lat,
        longitude: lng
      }
    },
    [value?.id]
  )

  const getLatLong = async (placeId: string) => {
    const coordinates = new Promise((resolve, reject) => {
      try {
        geocodeByPlaceId(placeId)
          .then(results => getLatLng(results[0]))
          .then(latLng => {
            resolve(latLng)
          })
      } catch (e) {
        console.log(e)
        reject(e)
      }
    })

    return (await coordinates) as LatLongArgs
  }

  const getAddressFromLatLong = async (lat: string, lng: string) => {
    const address = new Promise((resolve, reject) => {
      try {
        geocodeByLatLng({ lat: parseFloat(lat), lng: parseFloat(lng) }).then(results => {
          resolve(results[0])
        })
      } catch (e) {
        console.log(e)
        reject(e)
      }
    })

    return (await address) as google.maps.GeocoderResult
  }

  const getPostCode = async (placeId: string) => {
    const getPostalCode = new Promise((resolve, reject) => {
      try {
        new window.google.maps.places.PlacesService(document.createElement('div')).getDetails(
          {
            placeId,
            fields: ['address_components']
          },
          details => {
            let postcode = undefined
            details?.address_components?.forEach(entry => {
              if (entry.types?.[0] === 'postal_code') {
                postcode = entry.long_name
              }
            })
            return resolve(postcode)
          }
        )
      } catch (e) {
        console.log(e)
        reject(e)
      }
    })
    return await getPostalCode
  }

  const handleChangeMode = () => {
    setIsLatLongMode(prevState => !prevState)
    resetAddresses()
  }

  // console.log('VALUE: ', value)

  useEffect(() => {
    if (value) {
      if (isLatLongMode) {
        setAddressValue(undefined)
      } else {
        setAddressValue({
          label: generateLabelForGoogleAddress(value),
          value: value
        })
        value.id && setAddressId(value.id)
      }
    }
  }, [isLatLongMode, value])

  const manualChange = (field: string, v: string) => {
    onChange?.(Object.assign({}, value, { [field]: v }))
  }

  return (
    <div className="container">
      {isLatLongMode ? (
        <div className="inputContainer">
          <FormField
            type="number"
            name={`${name}.latitude`}
            kind="primary"
            title="Latitude"
            onChange={async (event: ChangeEvent<HTMLInputElement>) => {
              // TODO: Fix manual lat long inputs
              manualChange('latitude', event.target?.value)

              if (value && value.latitude && value.longitude) {
                setTimeout(async () => {
                  const parsedAddress = await parseAddressFromLatLong(value.latitude ?? '', value.longitude ?? '')
                  console.log('parsedAddress: ', parsedAddress)

                  const finalValue = {
                    label: generateLabelForGoogleAddress(parsedAddress),
                    value: parsedAddress
                  }

                  setAddressValue(finalValue)
                  onChange?.(finalValue.value)
                }, 1000)
              }
            }}
          />
          <FormField
            type="number"
            name={`${name}.longitude`}
            kind="primary"
            title="Longitude"
            onChange={(event: ChangeEvent<HTMLInputElement>) => manualChange('longitude', event.target?.value)}
          />
        </div>
      ) : (
        <GooglePlacesAutocomplete
          apiKey={GOOGLE_MAPS_API_KEY}
          debounce={250}
          selectProps={{
            isClearable: true,
            className: classnames(className, 'inputContainer'),
            maxMenuHeight: maxMenuHeight,
            styles: {
              control: provided => ({
                ...provided,
                backgroundColor: disabled ? 'var(--colorGray1)' : 'var(--colorWhite)',
                border: 0,
                boxShadow: 'none',
                borderRadius: 2,
                minHeight: '30px'
              }),
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              container: (provided, { isFocused }: any) => ({
                ...provided,
                width: '100%',
                border:
                  hasError && isTouched
                    ? '1px solid var(--colorRed)'
                    : !isFocused
                      ? '1px solid #E2E2E2'
                      : kind === 'primary'
                        ? '1px solid var(--colorBlue)'
                        : '1px solid var(--colorBlack)',
                boxShadow:
                  hasError && isTouched
                    ? '0 0 0 4px var(--colorRedFade)'
                    : !isFocused
                      ? ''
                      : kind === 'primary'
                        ? '0 0 0 4px var(--colorBlueFade)'
                        : '0 0 0 4px var(--colorGray2)',
                outline: isFocused && '0 none'
              }),
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              option: (provided, { isSelected, isFocused, isDisabled }: any) => ({
                ...provided,
                backgroundColor: isSelected ? '' : isFocused ? 'var(--colorGray1)' : 'white',
                color: 'var(--colorGray8)',
                '&:hover': {
                  backgroundColor: 'var(--colorGray1)'
                },
                cursor: isDisabled ? 'not-allowed' : 'pointer'
              }),
              indicatorsContainer: () => ({
                cursor: 'pointer'
              }),
              clearIndicator: provided => ({
                ...provided,
                padding: '0 6px'
              }),
              valueContainer: provided => ({
                ...provided,
                padding: '0 12px'
              }),
              dropdownIndicator: () => ({
                display: 'none'
              }),
              indicatorSeparator: () => ({
                display: 'none'
              }),
              menuList: provided => ({
                ...provided,
                '::-webkit-scrollbar': {
                  width: '0px',
                  height: '0px'
                }
              })
            },
            placeholder: placeholder,
            isDisabled: disabled,
            value: value ? addressValue : googleAddress,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            onChange: async (result: SingleValue<any>) => {
              if (result) {
                const parsedAddress: AddressValueProps = await parseGoogleAddress(result)

                const finalValue = {
                  label: generateLabelForGoogleAddress(parsedAddress),
                  value: parsedAddress
                }

                // Add addressId to the finalValue if it doesn't exist
                if (!finalValue.value.id) {
                  finalValue.value.id = addressId
                }
                setGoogleAddress(result)
                setAddressValue(finalValue)

                onChange?.(finalValue.value)
              } else {
                resetAddresses()

                // onChange?.({
                //   street1: '',
                //   street2: undefined,
                //   city: undefined,
                //   province: undefined,
                //   postcode: undefined,
                //   country: undefined,
                //   latitude: undefined,
                //   longitude: undefined
                // })
              }
            }
          }}
          autocompletionRequest={{
            types: placeOnly ? ['(cities)'] : undefined,
            componentRestrictions: {
              country: restrictCountries ?? ''
            }
          }}
        />
      )}

      {hasManualMode && (
        <Button
          className="manualBtn"
          kind="transparent"
          size="mini"
          disabled={disabled}
          isSubmitting={isSubmitting}
          onClick={handleChangeMode}>
          {isLatLongMode ? 'Search for an address' : 'Enter coordinates'}
        </Button>
      )}
    </div>
  )
}

export default AddressAutocomplete
