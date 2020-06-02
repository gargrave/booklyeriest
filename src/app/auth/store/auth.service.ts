import { auth } from 'config/firebase'

export const authService = {
  async login(email: string, password: string): Promise<void> {
    return new Promise((resolve, reject) => {
      auth
        .signInWithEmailAndPassword(email, password)
        .then(() => resolve())
        .catch((error) => {
          reject(error)
        })
    })
  },

  // async register(email: string, password: string): Promise<void> {
  //   return new Promise((resolve, reject) => {
  //     auth
  //       .createUserWithEmailAndPassword(email, password)
  //       .then(() => resolve())
  //       .catch((error) => {
  //         reject(error)
  //       })
  //   })
  // },
}
