export interface IGetBeachProfileSummary {
  pk: number
  barangay: string
  city: string
  province: string
  country: string
  lat: number
  lon: number
  url: string
  site_name: string
  survey_type: string
}

export interface IGetBeachProfileGraph {
  url: string
  transect_name: string
  pk: number
  lat: number
  lon: number
  barangay: string
  town: string
  province: string
  date: string
  start_time: string
  end_time: string
  transect_orientation: string
  description_of_fixed_point: string
  time_at_waterline: string
  point_at_waterline: number
  start_point: string
  end_point: string
  team_leader_name: string
  team_leader_contact_number: string
  team_leader_affiliation: string
  beach_profile_elevations: Array<{
    point: number
    x: number
    dz: number
    remarks: string
  }>
}
