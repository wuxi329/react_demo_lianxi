import axios from 'axios'
import { BASE_URL } from './consts'

let instance = axios.create()

instance.defaults.baseURL = BASE_URL
instance.defaults.timeout = 30000

// http请求拦截器
instance.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// http响应拦截器
instance.interceptors.response.use(
  res => {
    return res
  },
  error => {
    if (error.config.toastShow !== 0) {
      const { response } = error
      if (response) {
        // Vue.$vux.toast.text('网络请求失败，请稍后重试')
      } else {
        if (error.code === 'ECONNABORTED') {
          // Vue.$vux.toast.text('网络请求超时，请检查网络')
        } else {
          // Vue.$vux.toast.text('网络连接失败，请检查手机网络')
        }
      }
    }
    return Promise.reject(error)
  }
)

export const http = instance
