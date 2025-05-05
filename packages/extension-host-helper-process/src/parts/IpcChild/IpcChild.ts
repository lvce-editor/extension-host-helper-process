import * as IpcChildModule from '../IpcChildModule/IpcChildModule.ts'

export const listen = async ({ method, ...params }: any) => {
  const module = await IpcChildModule.getModule(method)
  // @ts-ignore
  const rawIpc = await module.listen(params)
  // @ts-ignore
  if (module.signal) {
    // @ts-ignore
    module.signal(rawIpc)
  }
  const ipc = module.wrap(rawIpc)
  return ipc
}
