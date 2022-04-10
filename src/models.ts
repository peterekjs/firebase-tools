import type { DocumentData, DocumentReference, Timestamp } from '@firebase/firestore'

export interface CollectionItem {
  id: string
}

export interface OrderedItem {
  order: number
}

export interface WithDocumentReference<T = DocumentData> {
  ref?: DocumentReference<T>
}

/**
 * Item stored on Firestore
 */
export interface FirebaseItem extends CollectionItem {
  created: Timestamp
}

/**
 * Parsed item on client side
 */
export interface ClientItem<T = DocumentData>
  extends
    CollectionItem,
    WithDocumentReference<T>
{
  created: Date
}
