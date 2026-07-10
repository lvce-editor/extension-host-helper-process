import * as FirstUtilityProcessEventType from '../FirstUtilityProcessEventType/FirstUtilityProcessEventType.ts'

export const getFirstUtilityProcessEvent = async (parentPort: any): Promise<any> => {
  // @ts-ignore
  const { event, type } = await new Promise((resolve) => {
    const cleanup = (value: any) => {
      parentPort.off('message', handleMessage)
      resolve(value)
    }
    const handleMessage = (event: any) => {
      cleanup({
        event,
        type: FirstUtilityProcessEventType.Message,
      })
    }
    parentPort.on('message', handleMessage)
  })
  return {
    event,
    type,
  }
}
