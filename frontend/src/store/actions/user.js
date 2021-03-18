import * as LoginService from '@/services/index.js'

export const login = async ({ commit }, data) => {
  return await LoginService.login(data)
    .then((data) => {
      const userData = { id: data._id, username: data.username }
      commit('SET_USER_DATA', { userData })
      console.log(data)
      Promise.resolve(data)
    })
    .catch((err) => {
      // commit()
      Promise.reject(err)
    })
}

// reversa
// cliente desistiu da compareSync
// insucesso n conseguimoes entregar
