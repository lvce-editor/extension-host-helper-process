import { Console } from 'node:console'
import { createWriteStream } from 'node:fs'
import { tmpdir } from 'node:os'

// TODO mock this module when used in unit tests

interface State {
  console: Console | undefined
}

const state: State = {
  console: undefined,
}

const createConsole = () => {
  const logFile = `${tmpdir()}/log-extension-host-helper-process.txt`
  const writeStream = createWriteStream(logFile)
  const logger = new Console(writeStream)
  return logger
}

const getOrCreateLogger = (): Console => {
  if (!state.console) {
    state.console = createConsole()
  }
  return state.console
}

export const log = (...args: readonly any[]): void => {
  const logger = getOrCreateLogger()
  logger.log(...args)
  console.log(...args)
}

export const info = (...args: readonly any[]) => {
  const logger = getOrCreateLogger()
  logger.info(...args)
  console.info(...args)
}

export const warn = (...args: readonly any[]): void => {
  const logger = getOrCreateLogger()
  logger.warn(...args)
  console.warn(...args)
}

export const error = (...args: readonly any[]): void => {
  const logger = getOrCreateLogger()
  logger.error(...args)
  console.error(...args)
}
