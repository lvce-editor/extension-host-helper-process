import * as SplitLines from '../SplitLines/SplitLines.ts'

const RE_AT = /^ {4}at /
const RE_JUST_PATH = /^(?:\/|\\).*\:\d+$/

const isStackLine = (line: string): boolean => {
  return RE_AT.test(line)
}

const isJustPath = (line: string): boolean => {
  return RE_JUST_PATH.test(line)
}

export const getModulesErrorStack = (stderr: any) => {
  const lines = SplitLines.splitLines(stderr)
  let startIndex = -1
  const extraLines: string[] = []
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    if (isJustPath(line)) {
      extraLines.push(`    at ${line}`)
      break
    }
  }
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    if (isStackLine(line)) {
      startIndex = i
      break
    }
  }
  if (startIndex === -1) {
    return []
  }
  let endIndex = -1
  for (let i = startIndex + 1; i < lines.length; i++) {
    const line = lines[i]
    if (!isStackLine(line)) {
      endIndex = i
      break
    }
  }
  if (endIndex === -1) {
    endIndex = lines.length - 1
  }
  const stackLines = lines.slice(startIndex, endIndex)
  const stack = [lines[startIndex - 1], ...extraLines, ...stackLines]
  return stack
}
