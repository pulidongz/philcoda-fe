import { SubMenu } from 'react-pro-sidebar'
import classname from 'classnames'

import Icon from '../../../../components/Icon'
import ReefComparisonChart from '../ReefComparisonChart'

type ReefPanelProps = {
  className?: string
}

const ReefPanel = ({ className }: ReefPanelProps) => {
  return (
    <>
      <SubMenu className={classname('subMenu', className)} icon={<Icon kind="file-text" />} label="Summary" defaultOpen>
        <div className="summaryContent">
          <div className="title">
            <p>Region</p>
            <p>Province</p>
            <p>City / Municipality</p>
            <p>Barangay</p>
            <p>Coordinates</p>
            <p>Station Name</p>
          </div>
          <div className="value">
            <p>Southwestern Tagalog Region</p>
            <p>Palawan</p>
            <p>El Nido</p>
            <p>Aberawan</p>
            <p>11.157200, 119.437683</p>
            <p>Site A</p>
          </div>
        </div>
      </SubMenu>

      <SubMenu className={classname('subMenu', className)} icon={<Icon kind="bar-chart-2" />} label="Data" defaultOpen>
        <div className="summaryContentColumn">
          <ReefComparisonChart />
        </div>
      </SubMenu>
    </>
  )
}

export default ReefPanel
