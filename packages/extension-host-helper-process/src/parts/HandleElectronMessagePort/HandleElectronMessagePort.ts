import * as Assert from '../Assert/Assert.ts'
import * as HandleIpc from '../HandleIpc/HandleIpc.ts'
import * as IpcChild from '../IpcChild/IpcChild.ts'
import * as IpcChildType from '../IpcChildType/IpcChildType.ts'
import * as IpcId from '../IpcId/IpcId.ts'

const handleClose = () => {
  process.exit(0)
}

export const handleElectronMessagePort = async (messagePort: any, ipcId: any): Promise<void> => {
  Assert.object(messagePort)
  const ipc = await IpcChild.listen({
    method: IpcChildType.ElectronMessagePort,
    messagePort,
  })
  HandleIpc.handleIpc(ipc)
  if (ipcId === IpcId.ExtensionHostWorker) {
    // @ts-ignore
    ipc.addEventListener('close', handleClose)
  }
}
