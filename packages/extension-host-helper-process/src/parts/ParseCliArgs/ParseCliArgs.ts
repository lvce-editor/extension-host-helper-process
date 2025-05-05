import minimist from 'minimist'

export const parseCliArgs = (args: any): any => {
  const CLI_OPTIONS = {}
  const parsedArgs = minimist(args, CLI_OPTIONS)
  return parsedArgs
}
