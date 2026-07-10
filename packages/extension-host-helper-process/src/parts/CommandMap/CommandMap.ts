import * as HandleElectronMessagePort from '../HandleElectronMessagePort/HandleElectronMessagePort.ts'
import * as HandleWebSocket from '../HandleWebSocket/HandleWebSocket.ts'
import * as LoadFile from '../LoadFile/LoadFile.ts'

export const commandMap = {
  'HandleElectronMessagePort.handleElectronMessagePort': HandleElectronMessagePort.handleElectronMessagePort,
  'HandleWebSocket.handleWebSocket': HandleWebSocket.handleWebSocket,
  'LoadFile.loadFile': LoadFile.loadFile,
}
