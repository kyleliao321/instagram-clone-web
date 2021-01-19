/**
 * Check if given string is blank, null or undefined
 * @param s String for verification
 */
export function isStringEmpty (s: string|null|undefined): boolean {
  return s === '' || s === null || s === undefined
}
