export const isMessagePortMain = (value: unknown): any => {
  return value && value.constructor && value.constructor.name === 'MessagePortMain'
}
