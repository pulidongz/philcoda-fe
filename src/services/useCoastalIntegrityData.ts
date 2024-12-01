import { IGetBeachProfileGraph, IGetBeachProfileSummary } from '../types/ci'
import axios from 'axios'
import useSWR from 'swr'

const API_URL = import.meta.env.VITE_API_URL

type UseCoastalIntegrityDataProps = {
  brgy?: string
  city: string
  province: string
}

// Result type for beach profile summary
type GetBeachProfileSummaryResult = {
  data: IGetBeachProfileSummary[] | null
  isLoading: boolean
  error?: string
}

// Generic SWR Fetch function
const fetchData = (url: string) => axios.get(url).then(res => res.data)

const useCoastalIntegrityData = () => {
  const GetBeachProfileSummary = ({
    brgy,
    city,
    province
  }: UseCoastalIntegrityDataProps): GetBeachProfileSummaryResult => {
    const params: Record<string, string> = {}
    let queryParams = ''

    // Prioritize parameters in this order: brgy => city => province
    if (brgy) {
      params['brgy'] = brgy
      queryParams = new URLSearchParams(params).toString()
    } else if (city) {
      params['city'] = city
      queryParams = new URLSearchParams(params).toString()
    } else if (province) {
      params['province'] = province
      queryParams = new URLSearchParams(params).toString()
    }

    queryParams = new URLSearchParams(params).toString()
    const shouldFetchData = !!queryParams

    const { data, error, isLoading } = useSWR<IGetBeachProfileSummary[]>(
      shouldFetchData ? `${API_URL}/search/?${queryParams}` : null,
      fetchData
    )

    if (!shouldFetchData) {
      return {
        data: null,
        isLoading
      }
    }

    return {
      data: data || null,
      isLoading,
      error: error?.message || undefined
    }
  }

  // Result type for beach profile graph
  type GetBeachProfileGraphResult = {
    data: IGetBeachProfileGraph | null
    isLoading: boolean
    error?: string
  }

  const GetBeachProfileGraph = ({ pk }: { pk: string }): GetBeachProfileGraphResult => {
    const shouldFetchData = !!pk

    const { data, error, isLoading } = useSWR(
      shouldFetchData ? `${API_URL}/beach-profile-surveys/${pk}` : null,
      fetchData
    )

    if (!shouldFetchData)
      return {
        data: null,
        isLoading
      }

    return {
      data: data || null,
      isLoading,
      error: error?.message || undefined
    }
  }

  const GetCoastalIntegrityImages = () => {
    const { data, error, isLoading } = useSWR(`${API_URL}/images`, fetchData)

    if (error) return `Failed to load: ${error}`
    if (isLoading) return 'Loading...'

    return data
  }

  const GetCoastalIntegrityHistoricalData = () => {
    const { data, error, isLoading } = useSWR(`${API_URL}/historical`, fetchData)

    if (error) return `Failed to load: ${error}`
    if (isLoading) return 'Loading...'

    return data
  }

  return {
    GetBeachProfileSummary,
    GetBeachProfileGraph,
    GetCoastalIntegrityImages,
    GetCoastalIntegrityHistoricalData
  }
}

export default useCoastalIntegrityData
