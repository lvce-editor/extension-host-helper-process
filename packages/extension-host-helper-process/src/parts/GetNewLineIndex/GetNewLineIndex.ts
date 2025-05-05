export const getNewLineIndex = (string: string, startIndex: number | undefined = undefined): number => {
  return string.indexOf('\n', startIndex)
}
