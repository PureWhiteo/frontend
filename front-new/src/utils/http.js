import axios from 'axios'
import router from '@/router'

const http = axios.create({
  timeout: 1000 * 86400,
  withCredentials: true,
  baseURL: '/springboot1144o',
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  }
})

http.interceptors.request.use(config => {
  if (config.method === 'get') {
    config.params = config.data;
    config.data = {};
  }
  config.headers['Token'] = localStorage.getItem('front-token') // 请求头带上token
  return config
}, error => {
  return Promise.reject(error)
})

http.interceptors.response.use(response => {
  if (response.data?.code === 401) { // 401, token失效
    localStorage.removeItem('front-token');
    router.push({ path: '/login' });
  }
  return response.data
}, error => {
  return Promise.reject(error)
})

export default http