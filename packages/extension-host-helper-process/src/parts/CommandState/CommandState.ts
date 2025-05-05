import * as Assert from '../Assert/Assert.ts'
import { VError } from '../VError/VError.ts'

interface State {
  commands: any
  execute: any
}

export const state: State = {
  commands: Object.create(null),
  execute: undefined,
}

export const registerCommand = (key: string, fn: any) => {
  try {
    Assert.string(key)
    Assert.fn(fn)
    state.commands[key] = fn
  } catch (error) {
    throw new VError(error, `Failed to register command ${key}`)
  }
}

export const registerCommands = (commandMap: any) => {
  for (const [key, value] of Object.entries(commandMap)) {
    registerCommand(key, value)
  }
}

export const getCommand = (key: string): any => {
  const { commands, execute } = state
  if (key in commands) {
    return commands[key]
  }
  if (execute) {
    return (...args: readonly any[]) => {
      return execute(key, ...args)
    }
  }
  return undefined
}

export const setExecute = (fn: any): void => {
  state.execute = fn
}
