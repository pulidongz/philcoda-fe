import { useState } from 'react'
// import { useSearchParams } from 'react-router-dom'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar'

import Switch from '../../../../components/Switch'
import Icon from '../../../../components/Icon'
import LocationSearchForm from '../../../../pages/map/components/LocationSearchForm'

const SIDEBAR_WIDTH = '300px'

const LeftSidebar = () => {
  // const [searchParams] = useSearchParams()
  const [collapsed, setCollapsed] = useState(false)
  const [active, setActive] = useState({
    // Spatial Filter
    stationName: false,
    marineBiogeoRegion: false,
    // Coastal Integrity
    shorelineTracing: false,
    // Mangrove
    areaExtentMg: false,
    // Seagrass
    areaExtentSg: false,
    // Fish
    level1: false,
    level2: false,
    level3: false,
    // Reef
    reefCover: false
  })

  const handleSwitch = (name: string) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setActive((prevState: any) => ({
      ...prevState,
      [name]: !prevState[name]
    }))
  }
  const handleSidebarToggle = () => {
    setCollapsed(prevState => !prevState)
  }

  // NOTE: Disabled for now, will be enabled once the search location is working
  // useEffect(() => {
  //   if (searchParams.get('loc') && !collapsed) {
  //     setCollapsed(true)
  //   }

  //   return () => {
  //     if (collapsed) {
  //       setCollapsed(false)
  //     }
  //   }
  // }, [searchParams, collapsed])

  return (
    <Sidebar collapsed={collapsed} width={SIDEBAR_WIDTH} className="sidebar">
      <Menu>
        <MenuItem onClick={handleSidebarToggle}>
          {collapsed ? <Icon kind="menu" /> : <img src="/landing/hingacu-logo.svg" alt="Hingacu" />}
        </MenuItem>

        <SubMenu icon={<img src="/sidebar/search-icon.svg" alt="search-icon" />} label="Search" defaultOpen>
          <div className="addressAutocompleteContainer">
            <LocationSearchForm />
          </div>
        </SubMenu>

        <SubMenu icon={<Icon kind="filter" />} label="Spatial Filter">
          <MenuItem onClick={() => handleSwitch('stationName')}>
            <div className="menuItem">
              Station Name
              <Switch name="stationName" checked={active.stationName} onChange={() => handleSwitch('stationName')} />
            </div>
          </MenuItem>
          <MenuItem onClick={() => handleSwitch('marineBiogeoRegion')}>
            <div className="menuItem">
              Marine Biogeographic Region
              <Switch
                name="marineBiogeoRegion"
                checked={active.marineBiogeoRegion}
                onChange={() => handleSwitch('marineBiogeoRegion')}
              />
            </div>
          </MenuItem>
        </SubMenu>
        <SubMenu icon={<img src="/sidebar/ci-icon.svg" alt="ci-icon" />} label="Coastal Integrity">
          <MenuItem onClick={() => handleSwitch('shorelineTracing')}>
            <div className="menuItem">
              Shoreline Tracing
              <Switch
                name="shorelineTracing"
                checked={active.shorelineTracing}
                onChange={() => handleSwitch('shorelineTracing')}
              />
            </div>
          </MenuItem>
        </SubMenu>
        <SubMenu icon={<img src="/sidebar/mg-icon.svg" alt="mg-icon" />} label="Mangrove">
          <MenuItem onClick={() => handleSwitch('areaExtentMg')}>
            <div className="menuItem">
              Area Extent
              <Switch name="areaExtent" checked={active.areaExtentMg} onChange={() => handleSwitch('areaExtentMg')} />
            </div>
          </MenuItem>
        </SubMenu>
        <SubMenu icon={<img src="/sidebar/sg-icon.svg" alt="sg-icon" />} label="Seagrass">
          <MenuItem onClick={() => handleSwitch('areaExtentSg')}>
            <div className="menuItem">
              Area Extent
              <Switch name="areaExtent" checked={active.areaExtentSg} onChange={() => handleSwitch('areaExtentSg')} />
            </div>
          </MenuItem>
        </SubMenu>
        <SubMenu icon={<img src="/sidebar/fish-icon.svg" alt="fish-icon" />} label="Fish">
          <MenuItem onClick={() => handleSwitch('level1')}>
            <div className="menuItem">
              Level 1
              <Switch name="level1" checked={active.level1} onChange={() => handleSwitch('level1')} />
            </div>
          </MenuItem>
          <MenuItem onClick={() => handleSwitch('level2')}>
            <div className="menuItem">
              Level 2
              <Switch name="level2" checked={active.level2} onChange={() => handleSwitch('level2')} />
            </div>
          </MenuItem>
          <MenuItem onClick={() => handleSwitch('level3')}>
            <div className="menuItem">
              Level 3
              <Switch name="level3" checked={active.level3} onChange={() => handleSwitch('level3')} />
            </div>
          </MenuItem>
        </SubMenu>

        <SubMenu className="submenu" icon={<img src="/sidebar/coral-icon.svg" alt="coral-icon" />} label="Reef">
          <MenuItem onClick={() => handleSwitch('reefCover')}>
            <div className="menuItem">
              Reef Cover
              <Switch name="reefCover" checked={active.reefCover} onChange={() => handleSwitch('reefCover')} />
            </div>
          </MenuItem>
        </SubMenu>
      </Menu>
    </Sidebar>
  )
}

export default LeftSidebar
