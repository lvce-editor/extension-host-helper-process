import * as FirstUtilityProcessEventType from '../FirstUtilityProcessEventType/FirstUtilityProcessEventType.ts'

export const getFirstUtilityProcessEvent = async (parentPort: any): Promise<any> => {
  // @ts-ignore
  const { type, event } = await new Promise((resolve) => {
    const cleanup = (value: any) => {
      parentPort.off('message', handleMessage)
      resolve(value)
    }
    const handleMessage = (event: any) => {
      cleanup({
        type: FirstUtilityProcessEventType.Message,
        event,
      })
    }
    parentPort.on('message', handleMessage)
  })
  return {
    type,
    event,
  }
}
