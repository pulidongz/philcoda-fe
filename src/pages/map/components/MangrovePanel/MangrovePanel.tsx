import { SubMenu } from 'react-pro-sidebar'
import classname from 'classnames'

import Icon from '../../../../components/Icon'
import CoverExtentGraph from '../CoverExtentGraph'
import SpeciesCompositionChart from '../SpeciesCompositionChart'

type MangrovePanelProps = {
  className?: string
}

const MangrovePanel = ({ className }: MangrovePanelProps) => {
  return (
    <>
      <SubMenu className={classname('subMenu', className)} icon={<Icon kind="file-text" />} label="Summary" defaultOpen>
        <div className="summaryContent">
          <div className="title">
            <p>Region</p>
            <p>Province</p>
            <p>City / Municipality</p>
            <p>Barangay</p>
            <p>Forest Type</p>
            <p>Habitat</p>
            <p>Area</p>
          </div>
          <div className="value">
            <p>Southwestern Tagalog Region</p>
            <p>Palawan</p>
            <p>El Nido</p>
            <p>Aberawan</p>
            <p>Riverine</p>
            <p>Seaward</p>
            <p>200 Ha</p>
          </div>
        </div>
      </SubMenu>

      <SubMenu className={classname('subMenu', className)} icon={<Icon kind="bar-chart-2" />} label="Data" defaultOpen>
        <div className="summaryContentColumn">
          <CoverExtentGraph color="hsla(122, 33%, 55%, 1)" />
          <SpeciesCompositionChart
            labels={[
              'Rhizophora apiculata',
              'Camptostemon philippinense',
              'Bruguiera cylindrica',
              'Heritiera littoralis',
              'Rhizophora stylosa',
              'Avicennia alba'
            ]}
          />
        </div>
      </SubMenu>

      <SubMenu
        className={classname('subMenu', className)}
        icon={<Icon kind="archive" />}
        label="Mangrove Threats in the Area"
        defaultOpen>
        <div className="summaryContent">Top 5 threats, fetch from DB</div>
      </SubMenu>
    </>
  )
}

export default MangrovePanel
