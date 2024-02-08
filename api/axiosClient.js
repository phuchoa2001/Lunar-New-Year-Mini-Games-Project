import axios, { AxiosResponse } from 'axios'
import { httpsApi } from 'constants/api'

const axiosClient = axios.create({
  baseURL: httpsApi,
  headers: {
    'Content-Type': 'application/json',
  },
})

axiosClient.interceptors.response.use(
  (response) => response?.data ?? response,
  (error) => Promise.reject(error),
)

export default axiosClient