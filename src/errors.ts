export const propErrors = {
  day(prop: string) {
    return `Property '${prop}' must be a correct day number.`
  },
  filledString(prop: string) {
    return `Property '${prop}' must be a filled string.`
  },
  timestamp(prop: string) {
    return `Property '${prop}' must be instance of Timestamp.`
  },
}
