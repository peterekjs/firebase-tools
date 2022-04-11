import type { DocumentData, Query } from '@firebase/firestore'
import { collectionData as _collectionData } from 'rxfire/firestore'

export const RXFIRE_ID_MAPPING = {
  idField: 'id',
}

export const collectionData = <
  D extends DocumentData
>(query: Query<D>) => _collectionData<D>(query, RXFIRE_ID_MAPPING)

export { docData } from 'rxfire/firestore'
