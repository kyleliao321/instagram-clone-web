/**
 * Check if given string is blank, null or undefined
 * @param s String for verification
 */
export function isStringEmpty (s: string|null|undefined): boolean {
  return s === '' || s === null || s === undefined
}

/**
 * Parse ISO 8601 Date string into YYYY/MM/DD HH:MM format
 * @param isoDateString Date String in ISO 8601 format
 */
export function formatDate (isoDateString: string): string {
  const date = new Date(isoDateString)
  const year = date.getUTCFullYear()
  const month = date.getUTCMonth() + 1
  const day = date.getUTCDate()
  const hour = date.getUTCHours()
  const min = date.getUTCMinutes()

  return `${year}/${month}/${day} ${hour}:${min}`
}

export enum RelationState {
  FOLLOWING,
  UNFOLLOWING,
  SELF
}
