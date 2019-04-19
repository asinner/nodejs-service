import { errCodes } from "../err/codes";
import { Response } from "express";

export function sendError(res: Response, RespKlass: any, code: string = errCodes.UNKNOWN_ERROR) {
    const body = {
        err: {code}
    }
    const output = RespKlass.fromObject(body)
    res.json(output.toJSON())
}