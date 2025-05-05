import { pathToFileURL } from 'node:url'
import * as CleanImportError from '../CleanImportError/CleanImportError.ts'
import { VError } from '../VError/VError.ts'

export const importScript = async (path: string): Promise<any> => {
  try {
    const url = pathToFileURL(path).toString()
    const module = await import(url)
    return module
  } catch (error) {
    const cleanError = CleanImportError.cleanImportError(error)
    throw new VError(cleanError, `Failed to load ${path}`)
  }
}
