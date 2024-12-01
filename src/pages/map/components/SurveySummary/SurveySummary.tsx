import FetchingPanel from '../../../../components/FetchingPanel'
import useCoastalIntegrityData from '../../../../services/useCoastalIntegrityData'

const SurveySummary = ({ pk }: { pk: string | undefined }) => {
  const { GetBeachProfileGraph } = useCoastalIntegrityData()

  if (!pk) return null

  const { data, isLoading } = GetBeachProfileGraph({ pk })

  if (isLoading) return <FetchingPanel />

  if (!data) {
    return (
      <div className="summaryContent">
        <p>No data available</p>
      </div>
    )
  }

  return (
    <div className="summaryContent">
      <div className="title">
        <p>Transect Name</p>
        <p>Survey Date</p>
        <p>Start Time</p>
        <p>End Time</p>
        <p>Transect Orientation</p>
        <p>Description of Fixed Point</p>
        <p>Time at Waterline</p>
        <p>Point at Waterline</p>
        <p>Start Point</p>
        <p>End Point</p>
        <p>Team Leader Name</p>
        <p>Team Leader Contact Number</p>
        <p>Team Leader Affiliation</p>
      </div>
      <div className="value">
        <p>{data.transect_name}</p>
        <p>{data.date}</p>
        <p>{data.start_time}</p>
        <p>{data.end_time}</p>
        <p>{data.transect_orientation}</p>
        <p>{data.description_of_fixed_point}</p>
        <p>{data.time_at_waterline}</p>
        <p>{data.point_at_waterline}</p>
        <p>{data.start_point}</p>
        <p>{data.end_point}</p>
        <p>{data.team_leader_name}</p>
        <p>{data.team_leader_contact_number}</p>
        <p>{data.team_leader_affiliation}</p>
      </div>
    </div>
  )
}

export default SurveySummary
