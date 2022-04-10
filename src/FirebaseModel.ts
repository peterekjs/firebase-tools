import type {
  DocumentData,
  DocumentReference,
  QueryDocumentSnapshot,
} from '@firebase/firestore'
import { Timestamp } from '@firebase/firestore'
import assert from 'assert-ts'
import { propErrors } from './errors'
import type { ClientItem } from './models'

export abstract class FirebaseModel implements ClientItem {
  readonly id!: string
  readonly ref!: DocumentReference<DocumentData>
  readonly created!: Date

  constructor(data: DocumentData, snapshot: QueryDocumentSnapshot) {
    assert(
      data.created instanceof Timestamp,
      propErrors.timestamp('created'),
      data
    )

    Object.defineProperties(this, {
      created: { value: new Date(data.created.toMillis()), enumerable: true },
      id: { value: snapshot.id, enumerable: false },
      ref: { value: snapshot.ref, enumerable: false },
    })
  }
}
