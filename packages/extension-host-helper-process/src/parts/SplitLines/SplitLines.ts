/**
 *
 * @param {string|undefined} lines
 * @returns string[]
 */
export const splitLines = (lines: string | undefined): readonly string[] => {
  if (!lines) {
    return []
  }
  return lines.split('\n')
}
