import * as CommandMap from '../CommandMap/CommandMap.ts'
import * as CommandState from '../CommandState/CommandState.ts'
import * as HandleIpc from '../HandleIpc/HandleIpc.ts'
import * as IpcChild from '../IpcChild/IpcChild.ts'
import * as IpcChildType from '../IpcChildType/IpcChildType.ts'
import * as ProcessListeners from '../ProcessListeners/ProcessListeners.ts'

export const main = async () => {
  process.on('disconnect', ProcessListeners.handleDisconnect)
  CommandState.registerCommands(CommandMap.commandMap)
  const ipc = await IpcChild.listen({ method: IpcChildType.Auto() })
  HandleIpc.handleIpc(ipc)
}
