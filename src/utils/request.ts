import axios from 'axios'
import publicConfig from '@/config'
import store from '@/store'

axios.defaults.baseURL = ''
/**
 * @description 请求拦截
 */
axios.interceptors.request.use(config => {
  const token = store.state.token
  if (token) {
    config.headers.Authorization = 'Bearer ' + token
  }
  return config
}, err => {
  return Promise.reject(err)
})

/**
 * @description 响应拦截
 */
axios.interceptors.response.use(res => {
  if (res.status === 200) {
    return Promise.resolve(res.data)
  } else {
    return Promise.reject(res)
  }
}, err => {
  return Promise.reject(err)
})

export default axios
