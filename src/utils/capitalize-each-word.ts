/**
 * Capitalizes the first letter of each word in a string.
 * @param str - The input string
 * @returns The string with each word capitalized
 */
const capitalizeEachWord = (str: string | null | undefined) => {
  if (!str) return ''

  return str
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ')
}

export default capitalizeEachWord
