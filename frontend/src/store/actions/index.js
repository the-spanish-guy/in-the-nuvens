import * as user from './user'
import * as darkMode from './darkMode'

const actions = () => {
  return { ...user, ...darkMode }
}

export default actions()
