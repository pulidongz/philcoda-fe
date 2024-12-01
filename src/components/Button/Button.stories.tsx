import { StoryFn, Meta } from '@storybook/react'

import Button from '../../components/Button'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta<typeof Button>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Button> = ({ children, ...props }) => <Button {...props}>{children}</Button>

export const ColorsAndSizes = () => (
  <>
    <div className="colorSeparator">
      <Button kind="reverse" size="mini">
        Reverse (mini)
      </Button>
      <Button kind="reverse" size="default">
        Reverse (default)
      </Button>
      <Button kind="reverse" size="large">
        Reverse (large)
      </Button>
    </div>

    <div className="colorSeparator">
      <Button kind="light" size="mini">
        Light (mini)
      </Button>
      <Button kind="light" size="default">
        Light (default)
      </Button>
      <Button kind="light" size="large">
        Light (large)
      </Button>
    </div>

    <hr />

    <div className="colorSeparator">
      <Button kind="dark" size="mini">
        Dark (mini)
      </Button>
      <Button kind="dark" size="default">
        Dark (default)
      </Button>
      <Button kind="dark" size="large">
        Dark (large)
      </Button>
    </div>

    <div className="colorSeparator">
      <Button kind="transparent" size="mini">
        Transparent (mini)
      </Button>
      <Button kind="transparent" size="default">
        Transparent (default)
      </Button>
      <Button kind="transparent" size="large">
        Transparent (large)
      </Button>
    </div>

    <div className="colorSeparator">
      <Button kind="default" size="mini">
        Default (mini)
      </Button>
      <Button kind="default" size="default">
        Default (default)
      </Button>
      <Button kind="default" size="large">
        Default (large)
      </Button>
    </div>

    <div className="colorSeparator">
      <Button kind="brand" size="mini">
        Brand (mini)
      </Button>
      <Button kind="brand" size="default">
        Brand (default)
      </Button>
      <Button kind="brand" size="large">
        Brand (large)
      </Button>
    </div>

    <div className="colorSeparator">
      <Button kind="primary" size="mini">
        Primary (mini)
      </Button>
      <Button kind="primary" size="default">
        Primary (default)
      </Button>
      <Button kind="primary" size="large">
        Primary (large)
      </Button>
    </div>

    <div className="colorSeparator">
      <Button kind="link" size="mini">
        Link (mini)
      </Button>
      <Button kind="link" size="default">
        Link (default)
      </Button>
      <Button kind="link" size="large">
        Link (large)
      </Button>
    </div>

    <div className="colorSeparator">
      <Button kind="positive" size="mini">
        Positive (mini)
      </Button>
      <Button kind="positive" size="default">
        Positive (default)
      </Button>
      <Button kind="positive" size="large">
        Positive (large)
      </Button>
    </div>

    <div className="colorSeparator">
      <Button kind="danger" size="mini">
        Danger (mini)
      </Button>
      <Button kind="danger" size="default">
        Danger (default)
      </Button>
      <Button kind="danger" size="large">
        Danger (large)
      </Button>
    </div>

    <div className="colorSeparator">
      <Button kind="dangerSecondary" size="mini">
        Danger Secondary (mini)
      </Button>
      <Button kind="dangerSecondary" size="default">
        Danger Secondary (default)
      </Button>
      <Button kind="dangerSecondary" size="large">
        Danger Secondary (large)
      </Button>
    </div>

    <div className="colorSeparator">
      <Button kind="positiveSecondary" size="mini">
        Positive Secondary (mini)
      </Button>
      <Button kind="positiveSecondary" size="default">
        Positive Secondary (default)
      </Button>
      <Button kind="positiveSecondary" size="large">
        Positive Secondary (large)
      </Button>
    </div>
  </>
)

export const ButtonStates = () => (
  <>
    <div className="colorSeparator">
      <Button kind="reverse">Reverse (default)</Button>
      <Button kind="reverse">Reverse (hover)</Button>
      <Button kind="reverse" active>
        Reverse (active)
      </Button>
      <Button kind="reverse" disabled>
        Reverse (disabled)
      </Button>
      <Button kind="reverse" isSubmitting>
        Reverse (submitting)
      </Button>
    </div>

    <div className="colorSeparator">
      <Button kind="light">Light (default)</Button>
      <Button kind="light">Light (hover)</Button>
      <Button kind="light" active>
        Light (active)
      </Button>
      <Button kind="light" disabled>
        Light (disabled)
      </Button>
      <Button kind="light" isSubmitting>
        Light (submitting)
      </Button>
    </div>

    <hr />

    <div className="colorSeparator">
      <Button kind="dark">Dark (default)</Button>
      <Button kind="dark">Dark (hover)</Button>
      <Button kind="dark" active>
        Dark (active)
      </Button>
      <Button kind="dark" disabled>
        Dark (disabled)
      </Button>
      <Button kind="dark" isSubmitting>
        Dark (submitting)
      </Button>
    </div>

    <div className="colorSeparator">
      <Button kind="transparent">Transparent (default)</Button>
      <Button kind="transparent">Transparent (hover)</Button>
      <Button kind="transparent" active>
        Transparent (active)
      </Button>
      <Button kind="transparent" disabled>
        Transparent (disabled)
      </Button>
      <Button kind="transparent" isSubmitting>
        Transparent (submitting)
      </Button>
    </div>

    <div className="colorSeparator">
      <Button kind="default">Default (default)</Button>
      <Button kind="default">Default (hover)</Button>
      <Button kind="default" active>
        Default (active)
      </Button>
      <Button kind="default" disabled>
        Default (disabled)
      </Button>
      <Button kind="default" isSubmitting>
        Default (submitting)
      </Button>
    </div>

    <div className="colorSeparator">
      <Button kind="primary">Primary (default)</Button>
      <Button kind="primary">Primary (hover)</Button>
      <Button kind="primary" active>
        Primary (active)
      </Button>
      <Button kind="primary" disabled>
        Primary (disabled)
      </Button>
      <Button kind="primary" isSubmitting>
        Primary (submitting)
      </Button>
    </div>

    <div className="colorSeparator">
      <Button kind="link">Link (default)</Button>
      <Button kind="link">Link (hover)</Button>
      <Button kind="link" active>
        Link (active)
      </Button>
      <Button kind="link" disabled>
        Link (disabled)
      </Button>
      <Button kind="link" isSubmitting>
        Link (submitting)
      </Button>
    </div>

    <div className="colorSeparator">
      <Button kind="positive">Positive (default)</Button>
      <Button kind="positive">Positive (hover)</Button>
      <Button kind="positive" active>
        Positive (active)
      </Button>
      <Button kind="positive" disabled>
        Positive (disabled)
      </Button>
      <Button kind="positive" isSubmitting>
        Positive (submitting)
      </Button>
    </div>

    <div className="colorSeparator">
      <Button kind="danger">Danger (default)</Button>
      <Button kind="danger">Danger (hover)</Button>
      <Button kind="danger" active>
        Danger (active)
      </Button>
      <Button kind="danger" disabled>
        Danger (disabled)
      </Button>
      <Button kind="danger" isSubmitting>
        Danger (isSubmitting)
      </Button>
    </div>

    <div className="colorSeparator">
      <Button kind="dangerSecondary">Danger Secondary (default)</Button>
      <Button kind="dangerSecondary">Danger Secondary (hover)</Button>
      <Button kind="dangerSecondary" active>
        Danger Secondary (active)
      </Button>
      <Button kind="dangerSecondary" disabled>
        Danger Secondary (disabled)
      </Button>
      <Button kind="dangerSecondary" isSubmitting>
        Danger Secondary (submitting)
      </Button>
    </div>

    <div className="colorSeparator">
      <Button kind="positiveSecondary">Positive Secondary (default)</Button>
      <Button kind="positiveSecondary">Positive Secondary (hover)</Button>
      <Button kind="positiveSecondary" active>
        Positive Secondary (active)
      </Button>
      <Button kind="positiveSecondary" disabled>
        Positive Secondary (disabled)
      </Button>
      <Button kind="positiveSecondary" isSubmitting>
        Positive Secondary (submitting)
      </Button>
    </div>
  </>
)

export const Icons = () => (
  <>
    <div className="colorSeparator">
      <Button kind="primary" size="default" icon="file-text" iconPosition="right">
        File text
      </Button>
      <Button kind="primary" size="mini" icon="file-text" iconPosition="right">
        File text
      </Button>
      <Button kind="primary" icon="file-text"></Button>
    </div>

    <div className="colorSeparator">
      <Button kind="default" size="default" icon="chevron-left" iconPosition="left">
        Prev arrow
      </Button>
      <Button kind="default" size="mini" icon="chevron-left" iconPosition="left">
        Prev arrow
      </Button>
      <Button kind="default" icon="chevron-left"></Button>
    </div>

    <div className="colorSeparator">
      <Button kind="dark" size="default" icon="chevron-left" iconPosition="left" iconColor="red">
        Prev arrow red
      </Button>
      <Button kind="dark" size="mini" icon="chevron-left" iconPosition="left" iconColor="red">
        Prev arrow red
      </Button>
      <Button kind="dark" icon="chevron-left"></Button>
    </div>
  </>
)

export const IsJoined = () => (
  <>
    <div className="colorSeparator">
      <Button kind="primary" isJoinedRight>
        Joined right
      </Button>

      <Button kind="primary" isJoinedLeft>
        Joined left
      </Button>
    </div>
  </>
)

export const IsSubmitting = () => (
  <>
    <div className="colorSeparator">
      <Button kind="primary" isSubmitting={false}>
        Submit
      </Button>

      <Button kind="primary" isSubmitting>
        Submitting
      </Button>

      <Button kind="primary" isSubmitting submittingText="Publishing Changes">
        Publish Changes
      </Button>
    </div>
  </>
)

export const Block = () => (
  <>
    <div className="colorSeparator">
      <Button kind="primary" isBlock>
        Block button
      </Button>
    </div>

    <div className="colorSeparator">
      <Button kind="default" isBlock>
        Block button
      </Button>
    </div>
  </>
)

export const Elastic = () => (
  <>
    <div className="colorSeparator">
      <Button kind="primary" isElastic>
        Elastic button
      </Button>
    </div>

    <div className="colorSeparator">
      <Button kind="default" isElastic>
        Elastic button
      </Button>
    </div>
  </>
)

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  kind: 'primary',
  children: 'Upload products'
}
