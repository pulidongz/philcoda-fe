import { StoryFn, Meta } from '@storybook/react'

import Button from '../../components/Button'
import Tooltip from '../../components/Tooltip'
import { TooltipPosition } from './TooltipPositionEnum'

import styles from './Tooltip.stories.module.css'

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta<typeof Tooltip>

const Template: StoryFn<typeof Tooltip> = ({ children, ...props }) => (
  <div className={styles.tipMargin}>
    <Tooltip {...props}>{children}</Tooltip>
  </div>
)

export const Default = Template.bind({})
export const Top = Template.bind({})
export const Bottom = Template.bind({})

Default.args = {
  children: (
    <>SKUs must contain only letters (a-z, A-Z), numbers (0-9), period (.), dash (-), underscore (_) or space ( ).</>
  )
}

Top.args = {
  isOpen: true,
  position: TooltipPosition.TOP,
  children: (
    <>SKUs must contain only letters (a-z, A-Z), numbers (0-9), period (.), dash (-), underscore (_) or space ( ).</>
  )
}

Bottom.args = {
  isOpen: true,
  position: TooltipPosition.BOTTOM,
  children: (
    <>SKUs must contain only letters (a-z, A-Z), numbers (0-9), period (.), dash (-), underscore (_) or space ( ).</>
  )
}

export const Target = () => (
  <>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <Tooltip
      iconSize={16}
      isOpen
      dismissable
      title="You Have Unpublished Changes"
      target={
        <Button kind="primary" icon="upload-cloud" iconPosition="right">
          Publish Changes
        </Button>
      }>
      Updates made to your products will not be live online or synced to iPads until you publish your changes.
    </Tooltip>
  </>
)
