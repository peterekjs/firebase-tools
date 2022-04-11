import type {
  DocumentData,
  DocumentReference,
  QueryDocumentSnapshot,
} from '@firebase/firestore'
import { Timestamp } from '@firebase/firestore'
import assert from 'assert-ts'
import { propErrors } from './errors'
import type { ClientItem } from './types'

export abstract class FirebaseModel implements ClientItem {
  readonly id!: string
  readonly ref!: DocumentReference<DocumentData>
  readonly $created!: Date
  readonly $updated?: Date

  constructor(data: DocumentData, snapshot: QueryDocumentSnapshot) {
    assert(
      data.$created instanceof Timestamp,
      propErrors.timestamp('$created'),
      data
    )

    const defineDate = (prop: string) => Object.defineProperty(this, prop, {
      value: new Date(data[prop].toMillis()),
      enumerable: true
    })

    defineDate('$created')
    if (data.$updated) defineDate('$updated')

    Object.defineProperties(this, {
      id: { value: snapshot.id, enumerable: false },
      ref: { value: snapshot.ref, enumerable: false },
    })
  }
}
