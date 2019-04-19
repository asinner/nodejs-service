import { RequestHandler } from "express";
import { validate as _validate } from 'class-validator'

export function requestValidationMiddleware(ValidatorKlass: any, RespKlass: any): RequestHandler {
    return async (req, res, next) => {
        const validator: any = new ValidatorKlass()
        Object.keys(req.body).forEach(key => {
            validator[key] = req.body[key]
        })
        const code = await validate(validator)
        if (code) {
            const resp = RespKlass.fromObject({
                err: {code}
            })
            res.json(resp.toJSON())
            return
        }
        next()
    }
}

export async function validate(obj: any): Promise<string | undefined> {
    const errors = await _validate(obj)
    if (errors && errors.length > 0) {
        const error = errors[0]
        return Object.values(error.constraints)[0]
    }
    return undefined
}