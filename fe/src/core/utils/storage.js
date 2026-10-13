/**
 * LocalStorage helpers for JWT token management.
 */
const TOKEN_KEY = 'gdhd_access_token'

export const getToken = () => localStorage.getItem(TOKEN_KEY)
export const setToken = (token) => localStorage.setItem(TOKEN_KEY, token)
export const removeToken = () => localStorage.removeItem(TOKEN_KEY)
