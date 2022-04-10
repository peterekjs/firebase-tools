import type { DocumentReference, Timestamp } from '@firebase/firestore'
import { getDoc } from '@firebase/firestore'
import { isDictionary, isNumber } from '@peterek/helpers'
import { assert } from 'assert-ts'

export async function getDocData(ref: DocumentReference) {
  assert(isDictionary(ref), 'Document reference must be defined')

  const snapshot = await getDoc(ref)

  return snapshot.exists() ? snapshot.data() : null
}

export function isTimestamp(value: unknown): value is Timestamp {
  return isDictionary(value) && isNumber(value.seconds)
}

export function parseTimestamp(timestamp: Timestamp): Date {
  assert(isTimestamp(timestamp), 'Value must be a Firestore timestamp')

  return new Date(timestamp.seconds * 1000)
}
