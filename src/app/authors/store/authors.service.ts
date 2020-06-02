/* eslint-disable sort-keys */
import { db } from 'config/firebase'
import { FbCollection, FbDoc, FbDocRef } from 'utils/firebase/firebase.types'
import {
  collectionToIdMap,
  ObjectIdMap,
  singleToIdMap,
} from 'utils/firebase/firestore.utils'
import { Author, UpdatableAuthor, WritableAuthor } from './authors.types'

export const authorsService = {
  async fetchAuthorsByOwner(ownerId: string): Promise<ObjectIdMap<Author>> {
    const query = db.collection(`authors/byOwner/${ownerId}`)
    const response: FbCollection = await query.get()
    return collectionToIdMap<Author>(response)
  },

  async createAuthor(
    ownerId: string,
    payload: Author,
  ): Promise<ObjectIdMap<Author>> {
    const date = new Date()
    const author: WritableAuthor = {
      ...payload,
      created: date,
      updated: date,
    }

    const query: FbDocRef = await db
      .collection(`authors/byOwner/${ownerId}`)
      .add(author)
    const response: FbDoc = await query.get()
    return singleToIdMap<Author>(response)
  },

  async updateAuthor(
    ownerId: string,
    payload: Author,
  ): Promise<ObjectIdMap<Author>> {
    const date = new Date()
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { created, id, ...rest } = payload
    const author: UpdatableAuthor = {
      ...rest,
      updated: date,
    }

    const docRef: FbDocRef = await db
      .collection(`authors/byOwner/${ownerId}`)
      .doc(id)
    await docRef.update(author)
    const response: FbDoc = await docRef.get()
    return singleToIdMap<Author>(response)
  },

  async deleteAuthor(
    ownerId: string,
    payload: Author,
  ): Promise<ObjectIdMap<Author>> {
    const docRef: FbDocRef = await db
      .collection(`authors/byOwner/${ownerId}`)
      .doc(payload.id)
    return await docRef.delete()
  },
}
