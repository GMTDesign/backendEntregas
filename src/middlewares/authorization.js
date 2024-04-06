import { decodeData } from "../utils/cryptography.js"

export function onlyRoles(roles) {
    return async function (req, res, next) {
        if (roles.includes(req.user.role)) {
            return next()
        }
        const errorType = new Error('you need special permission')
        errorType['type'] = 'FAILED_AUTHORIZATION'
        next(errorType)
    }
}

export function loginValidation(req, res, next) {
    if (!req.signedCookies.authorization) {
        const error = new Error('you have to login')
        next(error)
    } else {
        next()
    }

}

export async function onlyAdmin(req, res, next) {
    const userData = await decodeData(req.signedCookies.authorization)
    if (userData.role !== 'admin') {
        const error = new Error('only admin has permission')
        next(error)
    } else {
        next()
    }
}

export async function onlyUser(req, res, next) {
    const userData = await decodeData(req.signedCookies.authorization)
    if (userData.role !== 'user') {
        const error = new Error('only user has permission')
        next(error)
    } else {
        req.email = userData.email
        next()
    }
}