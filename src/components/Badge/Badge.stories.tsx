import { StoryFn, Meta } from '@storybook/react'

import Badge from '../Badge'
import { BadgeColor } from './BadgeColorEnum'

export default {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta<typeof Badge>

const Template: StoryFn<typeof Badge> = ({ children, ...props }) => (
  <div>
    <Badge {...props}>{children}</Badge>
  </div>
)

export const Default = Template.bind({})

Default.args = {
  children: (
    <>SKUs must contain only letters (a-z, A-Z), numbers (0-9), period (.), dash (-), underscore (_) or space ( ).</>
  )
}

export const WithLeadingIcon = () => (
  <>
    <Badge leadingIcon="check" className="badge">
      Complete
    </Badge>

    <Badge style="tinted" leadingIcon="info" leadingIconColor="var(--colorBlue8)" className="badge">
      Information
    </Badge>
  </>
)

export const Colors = () => (
  <>
    <div className="group">
      <div className="separator">
        <div className="heading">color=&quot;gray&quot;</div>

        <Badge color={BadgeColor.gray} style="tinted" className="badge">
          Tinted
        </Badge>

        <Badge color={BadgeColor.gray} style="solid" className="badge">
          Solid
        </Badge>

        <Badge color={BadgeColor.gray} style="round" className="badge">
          Round
        </Badge>

        <Badge color={BadgeColor.gray} style="tinted" className="badge" onDismissClick={() => undefined}>
          Tinted
        </Badge>

        <Badge color={BadgeColor.gray} style="solid" className="badge" onDismissClick={() => undefined}>
          Solid
        </Badge>
      </div>

      <div className="separator">
        <div className="heading">color=&quot;tan&quot;</div>

        <Badge color={BadgeColor.tan} style="tinted" className="badge">
          Tinted
        </Badge>

        <Badge color={BadgeColor.tan} style="solid" className="badge">
          Solid
        </Badge>

        <Badge color={BadgeColor.tan} style="round" className="badge">
          Round
        </Badge>

        <Badge color={BadgeColor.tan} style="tinted" className="badge" onDismissClick={() => undefined}>
          Tinted
        </Badge>

        <Badge color={BadgeColor.tan} style="solid" className="badge" onDismissClick={() => undefined}>
          Solid
        </Badge>
      </div>

      <div className="separator">
        <div className="heading">color=&quot;red&quot;</div>

        <Badge color={BadgeColor.red} style="tinted" className="badge">
          Tinted
        </Badge>

        <Badge color={BadgeColor.red} style="solid" className="badge">
          Solid
        </Badge>

        <Badge color={BadgeColor.red} style="round" className="badge">
          Round
        </Badge>

        <Badge color={BadgeColor.red} style="tinted" className="badge" onDismissClick={() => undefined}>
          Tinted
        </Badge>

        <Badge color={BadgeColor.red} style="solid" className="badge" onDismissClick={() => undefined}>
          Solid
        </Badge>
      </div>

      <div className="separator">
        <div className="heading">color=&quot;green&quot;</div>

        <Badge color={BadgeColor.green} style="tinted" className="badge">
          Tinted
        </Badge>

        <Badge color={BadgeColor.green} style="solid" className="badge">
          Solid
        </Badge>

        <Badge color={BadgeColor.green} style="round" className="badge">
          Round
        </Badge>

        <Badge color={BadgeColor.green} style="tinted" className="badge" onDismissClick={() => undefined}>
          Tinted
        </Badge>

        <Badge color={BadgeColor.green} style="solid" className="badge" onDismissClick={() => undefined}>
          Solid
        </Badge>
      </div>

      <div className="separator">
        <div className="heading">color=&quot;blue&quot;</div>
        <Badge color={BadgeColor.blue} style="tinted" className="badge">
          Tinted
        </Badge>

        <Badge color={BadgeColor.blue} style="solid" className="badge">
          Solid
        </Badge>

        <Badge color={BadgeColor.blue} style="round" className="badge">
          Round
        </Badge>

        <Badge color={BadgeColor.blue} style="tinted" className="badge" onDismissClick={() => undefined}>
          Tinted
        </Badge>

        <Badge color={BadgeColor.blue} style="solid" className="badge" onDismissClick={() => undefined}>
          Solid
        </Badge>
      </div>

      <div className="separator">
        <div className="heading">color=&quot;yellow&quot;</div>

        <Badge color={BadgeColor.yellow} style="tinted" className="badge">
          Tinted
        </Badge>

        <Badge color={BadgeColor.yellow} style="solid" className="badge">
          Solid
        </Badge>

        <Badge color={BadgeColor.yellow} style="round" className="badge">
          Round
        </Badge>

        <Badge color={BadgeColor.yellow} style="tinted" className="badge" onDismissClick={() => undefined}>
          Tinted
        </Badge>

        <Badge color={BadgeColor.yellow} style="solid" className="badge" onDismissClick={() => undefined}>
          Solid
        </Badge>
      </div>

      <div className="separator">
        <div className="heading">color=&quot;purple&quot;</div>
        <Badge color={BadgeColor.purple} style="tinted" className="badge">
          Tinted
        </Badge>

        <Badge color={BadgeColor.purple} style="solid" className="badge">
          Solid
        </Badge>

        <Badge color={BadgeColor.purple} style="round" className="badge">
          Round
        </Badge>

        <Badge color={BadgeColor.purple} style="tinted" className="badge" onDismissClick={() => undefined}>
          Tinted
        </Badge>

        <Badge color={BadgeColor.purple} style="solid" className="badge" onDismissClick={() => undefined}>
          Solid
        </Badge>
      </div>
    </div>
  </>
)

export const SpecificUseCases = () => (
  <div className="columns">
    <div className="group">
      <div className="groupHeading">Contextual</div>

      <div className="separator">
        <div className="heading">kind=&quot;default&quot;</div>
        <Badge kind="default">Label</Badge>
      </div>

      <div className="separator">
        <div className="heading">kind=&quot;success&quot;</div>
        <Badge kind="success">Label</Badge>
      </div>

      <div className="separator">
        <div className="heading">kind=&quot;error&quot;</div>
        <Badge kind="error">Label</Badge>
      </div>

      <div className="separator">
        <div className="heading">kind=&quot;warning&quot;</div>
        <Badge kind="warning">Label</Badge>
      </div>

      <div className="separator">
        <div className="heading">kind=&quot;info&quot;</div>
        <Badge kind="info">Label</Badge>
      </div>
    </div>

    <div className="group">
      <div className="groupHeading">Order Statuses</div>

      <div className="separator">
        <div className="heading">kind=&quot;draft&quot;</div>
        <Badge kind="draft">Label</Badge>
      </div>

      <div className="separator">
        <div className="heading">kind=&quot;posted&quot;</div>
        <Badge kind="posted">Label</Badge>
      </div>
    </div>

    <div className="group">
      <div className="groupHeading">Request Statuses</div>

      <div className="separator">
        <div className="heading">kind=&quot;approved&quot;</div>
        <Badge kind="approved">Label</Badge>
      </div>

      <div className="separator">
        <div className="heading">kind=&quot;requested&quot;</div>
        <Badge kind="requested">Label</Badge>
      </div>

      <div className="separator">
        <div className="heading">kind=&quot;rejected&quot;</div>
        <Badge kind="rejected">Label</Badge>
      </div>
    </div>

    <div className="group">
      <div className="groupHeading">Product Labels</div>

      <div className="separator">
        <div className="heading">kind=&quot;new&quot;</div>
        <Badge kind="new">Label</Badge>
      </div>

      <div className="separator">
        <div className="heading">kind=&quot;bestSeller&quot;</div>
        <Badge kind="bestSeller">Label</Badge>
      </div>

      <div className="separator">
        <div className="heading">kind=&quot;special&quot;</div>
        <Badge kind="special">Label</Badge>
      </div>

      <div className="separator">
        <div className="heading">kind=&quot;upcoming&quot;</div>
        <Badge kind="upcoming">Label</Badge>
      </div>

      <div className="separator">
        <div className="heading">kind=&quot;soldOut&quot;</div>
        <Badge kind="soldOut">Label</Badge>
      </div>

      <div className="separator">
        <div className="heading">kind=&quot;discontinued&quot;</div>
        <Badge kind="discontinued">Label</Badge>
      </div>
    </div>

    <div className="group">
      <div className="groupHeading">Other</div>
      <div className="separator">
        <div className="heading">kind=&quot;currency&quot;</div>
        <Badge kind="currency">Label</Badge>
      </div>
    </div>
  </div>
)
