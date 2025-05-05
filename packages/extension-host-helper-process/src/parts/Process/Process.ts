export const exit = (code: number): void => {
  process.exit(code)
}

export const setExitCode = (exitCode: number): void => {
  process.exitCode = exitCode
}
