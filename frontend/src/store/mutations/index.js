import * as user from './user'
import * as darkMode from './darkMode'

const mutations = () => {
  return { ...user, ...darkMode }
}

export default mutations()
