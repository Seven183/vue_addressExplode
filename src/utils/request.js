import axios from 'axios'

// create an axios instance
const service = axios.create({
  // baseURL: 'http://localhost:8080',
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000 // request timeout
})
export default service
