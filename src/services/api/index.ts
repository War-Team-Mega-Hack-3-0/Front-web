import Axios from 'axios'

export const api = Axios.create({
  baseURL: process.env.REACT_APP_API
})

export function setToken(token: string) {
  if (token) {
    api.defaults.headers.authorization = `Bearer ${token}`
  }
}
