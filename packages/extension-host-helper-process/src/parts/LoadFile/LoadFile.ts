import * as Assert from '../Assert/Assert.ts'
import * as CommandState from '../CommandState/CommandState.ts'
import * as ImportScript from '../ImportScript/ImportScript.ts'
import { VError } from '../VError/VError.ts'

export const loadFile = async (path: string): Promise<void> => {
  try {
    Assert.string(path)
    const module = await ImportScript.importScript(path)
    if (module && module.commandMap) {
      const {commandMap} = module
      CommandState.registerCommands(commandMap)
    } else if (module && module.execute) {
      CommandState.setExecute(module.execute)
    } else {
      throw new Error(`missing export const execute function`)
    }
  } catch (error) {
    throw new VError(error, `Failed to load ${path}`)
  }
}
