import jwt from 'jsonwebtoken'

export const decodeJwt = (token) => jwt.decode(token)
