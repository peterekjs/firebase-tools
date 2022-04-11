import type { OrderedItem } from './types'

export function sortByOrder<T extends OrderedItem>(list: T[]): T[] {
  return list.sort((a, b) => b.order - a.order)
}

export function parseOrder(value: unknown) {
  return typeof value === 'number' ? value : -1
}
