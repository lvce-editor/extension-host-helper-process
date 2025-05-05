import { CommandNotFoundError } from '../CommandNotFoundError/CommandNotFoundError.ts'
import * as CommandState from '../CommandState/CommandState.ts'

export const execute = (command: string, ...args: readonly any[]): Promise<void> => {
  const fn = CommandState.getCommand(command)
  if (!fn) {
    throw new CommandNotFoundError(command)
  }
  return fn(...args)
}
