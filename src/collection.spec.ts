import { describe, it } from 'vitest'
import { sortByOrder } from './collection'

describe('collection', () => {
  const A = { order: 1 }
  const B = { order: 2 }
  const C = { order: 3 }

  it('sortByOrder should sort items by \'order\' property in descending order', ({ expect }) => {
    expect(sortByOrder([A, C, B])).to.eql([C, B, A])
  })
})
