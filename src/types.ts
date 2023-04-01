import type { DocumentData, DocumentReference, Timestamp } from '@firebase/firestore'

export type CollectionItem = {
  id: string
}

export type OrderedItem = {
  order: number
}

export type WithDocumentReference<T = DocumentData> = {
  ref?: DocumentReference<T>
}

/**
 * Item stored on Firestore
 */
export type FirebaseItem = CollectionItem & {
  $created: Timestamp
  $updated?: Timestamp
}

/**
 * Parsed item on client side
 */
export type ClientItem<T = DocumentData> = CollectionItem & WithDocumentReference<T> &
{
  $created: Date
  $updated?: Date
}
