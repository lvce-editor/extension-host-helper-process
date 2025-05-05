import * as Callback from '../Callback/Callback.ts'
import * as Command from '../Command/Command.ts'
import * as JsonRpc from '../JsonRpc/JsonRpc.ts'

const preparePrettyError = (error: any) => {
  return error
}

const logError = (error: any) => {
  // this is handled by shared process
}

const requiresSocket = () => {
  return false
}

export const handleMessage = (event: any) => {
  return JsonRpc.handleJsonRpcMessage(
    event.target,
    event.data,
    Command.execute,
    Callback.resolve,
    preparePrettyError,
    logError,
    requiresSocket,
  )
}
