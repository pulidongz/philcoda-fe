import { ReactNode } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'

type HeaderTabsProps = {
  className?: string
  selectedTabClassName?: string
  selectedTabPanelClassName?: string
  tabListClassName?: string

  headers: ReactNode[] | string[]
  panels: ReactNode[] | string[]
}

const HeaderTabs = ({
  className,
  selectedTabClassName,
  selectedTabPanelClassName,
  tabListClassName,
  headers,
  panels
}: HeaderTabsProps) => {
  const tabPanels = panels?.map((panel, index) => {
    return <TabPanel key={index}>{panel}</TabPanel>
  })

  return (
    <Tabs
      className={className}
      selectedTabClassName={selectedTabClassName}
      selectedTabPanelClassName={selectedTabPanelClassName}>
      <TabList className={tabListClassName}>
        {headers?.map((header, index) => {
          return <Tab key={index}>{header}</Tab>
        })}
      </TabList>
      {tabPanels}
    </Tabs>
  )
}

export default HeaderTabs
