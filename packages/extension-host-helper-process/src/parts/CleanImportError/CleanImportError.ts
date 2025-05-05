import * as GetModulesErrorStack from '../GetModulesErrorStack/GetModulesErrorStack.ts'
import * as JoinLines from '../JoinLines/JoinLines.ts'
import * as SplitLines from '../SplitLines/SplitLines.ts'

const cleanImportSyntaxError = (error: any): any => {
  const cleanStackLines = GetModulesErrorStack.getModulesErrorStack(error.stack)
  const cleanError = new SyntaxError(error.message)
  const currentStack = JoinLines.joinLines(SplitLines.splitLines(new Error().stack).slice(3))
  const cleanStack = JoinLines.joinLines(cleanStackLines)
  const mergedStack = cleanStack + '\n' + currentStack
  cleanError.stack = mergedStack
  return cleanError
}

export const cleanImportError = (error: any): any => {
  if (error && error instanceof SyntaxError) {
    return cleanImportSyntaxError(error)
  }
  return error
}
