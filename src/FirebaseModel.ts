import type {
  DocumentData,
  DocumentReference,
  QueryDocumentSnapshot,
} from '@firebase/firestore'
import type { ClientItem } from './types'
import { assertDocumentData } from './firestore'


export abstract class FirebaseModel implements ClientItem {
  readonly id!: string
  readonly ref!: DocumentReference<DocumentData>
  readonly $created!: Date
  readonly $updated?: Date

  constructor(data: DocumentData, snapshot: QueryDocumentSnapshot) {
    assertDocumentData(data)

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
