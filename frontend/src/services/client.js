import axios from 'axios'
import appConfigs from '../config'

const Axios = axios.create({
  baseURL: appConfigs.VUE_APP_URL
})

Axios.interceptors.request.use(
  async (request) => {
    console.log('req.cfg', request)

    return request
  },
  (requestError) => {
    console.log('req.err', requestError)

    return Promise.reject(requestError)
  }
)

Axios.interceptors.response.use(
  async (response) => {
    console.log('res.cfg', response.data)

    return response
  },
  (responseError) => {
    console.log('res.err', responseError)

    return Promise.reject(responseError)
  }
)

export default Axios
