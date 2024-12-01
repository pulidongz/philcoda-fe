import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar'

import HeaderTabs from '../../../../components/HeaderTabs'

import CoastalIntegrityPanel from '../CoastalIntegrityPanel'
import MangrovePanel from '../MangrovePanel'
import SeagrassPanel from '../SeagrassPanel'
import FishPanel from '../FishPanel'
import ReefPanel from '../ReefPanel'

const SIDEBAR_WIDTH = '30vw'
const SIDEBAR_COLLAPSED_WIDTH = '24px'

const RightSidebar = () => {
  const [searchParams] = useSearchParams()
  const [collapsed, setCollapsed] = useState(true)

  const headers = ['Coastal Integrity', 'Mangrove', 'Seagrass', 'Fish', 'Reef']
  // panels contain all of the data for each tab (graphs, tables, etc.)
  const panels = [
    <CoastalIntegrityPanel className="panel" />,
    <MangrovePanel className="panel" />,
    <SeagrassPanel className="panel" />,
    <FishPanel className="panel" />,
    <ReefPanel className="panel" />
  ]

  const handleSidebarToggle = () => {
    setCollapsed(prevState => !prevState)
  }

  useEffect(() => {
    if (searchParams.size > 0 && collapsed) {
      setCollapsed(false)
    }

    return () => {
      if (!collapsed) {
        setCollapsed(true)
      }
    }
  }, [searchParams, collapsed])

  return (
    <Sidebar className="sidebar" collapsed={collapsed} width={SIDEBAR_WIDTH} collapsedWidth={SIDEBAR_COLLAPSED_WIDTH}>
      <Menu>
        <MenuItem onClick={handleSidebarToggle}>
          {/* {collapsed ? <Icon kind="menu" /> : <img src="/landing/hingacu-logo.svg" alt="Hingacu" />} */}
          {/* <Icon kind="user" /> */}
        </MenuItem>

        <HeaderTabs headers={headers} panels={panels} />
      </Menu>
    </Sidebar>
  )
}

export default RightSidebar
