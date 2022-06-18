import axios from 'axios'

export default axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
})
