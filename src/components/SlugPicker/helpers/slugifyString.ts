import slugify from 'slugify'

export const slugifyString = (value?: string, allowTrailingHyphen?: boolean) => {
  const blacklist = ['www', 'https', 'http', 'fieldfoliocom', 'comau$', '^-'].concat(allowTrailingHyphen ? [] : ['-$'])
  const regExp = new RegExp(blacklist.join('|'), 'g')

  return slugify(value ?? '', {
    replacement: '-',
    lower: true,
    strict: true,
    trim: false
  }).replace(regExp, '')
}
