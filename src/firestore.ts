import type { DocumentData, DocumentReference, Timestamp } from '@firebase/firestore'
import { getDoc } from '@firebase/firestore'
import { assertFilledString, assertObject, assertPositiveNumber, assertSafeInteger, isFilledString, isObject, isPositiveNumber, isSafeInteger } from '@peterek/helpers'

//#region DocumentData Identity
export function assertDocumentData(value: unknown): asserts value is DocumentData {
  assertObject(value)
  assertTimestamp(value.$created)
}
export function ensureDocumentData(value: unknown) {
  assertDocumentData(value)
  return value
}
export function isDocumentData(value: unknown): value is Timestamp {
  return isObject(value) && isTimestamp(value.$created)
}
//#endregion

//#region DocumentReference Identity
export function assertDocumentReference(value: unknown): asserts value is DocumentData {
  assertObject(value)
  assertFilledString(value.type)
  assertFilledString(value.id)
  assertFilledString(value.path)
}
export function ensureDocumentReference(value: unknown) {
  assertDocumentReference(value)
  return value
}
export function isDocumentReference(value: unknown): value is Timestamp {
  return isObject(value) && isFilledString(value.type) && isFilledString(value.id) && isFilledString(value.path)
}
//#endregion

//#region Timestamp Identity
export function assertTimestamp(value: unknown): asserts value is Timestamp {
  assertObject(value)
  assertSafeInteger(value.seconds)
  assertPositiveNumber(value.seconds)
}
export function ensureTimestamp(value: unknown) {
  assertTimestamp(value)
  return value
}
export function isTimestamp(value: unknown): value is Timestamp {
  return isObject(value) && isSafeInteger(value.seconds) && isPositiveNumber(value.seconds)
}
//#endregion

export async function getDocData(ref: DocumentReference) {
  assertDocumentReference(ref)

  const snapshot = await getDoc(ref)
  return snapshot.exists() ? snapshot.data() : null
}

export function parseTimestamp(timestamp: Timestamp): Date {
  assertTimestamp(timestamp)

  return new Date(timestamp.seconds * 1000)
}
