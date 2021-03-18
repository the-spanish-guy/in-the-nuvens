import client from './client'

export const login = async ({ username, password }) => {
  return await client
    .post('/login', { username, password })
    .then(({ data }) => data)
    .catch((err) => { throw new Error(err) })
}
