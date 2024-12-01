import { BadgeColor } from './BadgeColorEnum'

const kindToColorMapping = {
  default: BadgeColor.gray,
  info: BadgeColor.blue,
  error: BadgeColor.red,
  warning: BadgeColor.yellow,
  success: BadgeColor.green,
  brand: BadgeColor.tan,

  currency: BadgeColor.green,

  draft: BadgeColor.red,
  posted: BadgeColor.green,
  backorder: BadgeColor.yellow,

  approved: BadgeColor.green,
  requested: BadgeColor.red,
  pending: BadgeColor.yellow,
  rejected: BadgeColor.gray,
  declined: BadgeColor.gray,
  removed: BadgeColor.gray,

  new: BadgeColor.green,
  bestSeller: BadgeColor.blue,
  special: BadgeColor.red,
  upcoming: BadgeColor.purple,
  soldOut: BadgeColor.yellow,
  discontinued: BadgeColor.gray
}

export default kindToColorMapping
