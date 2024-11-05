import { Request, Response } from "express";
import { writeFileSync } from "fs";


export const serverRunning = async (req: Request, res: Response) =>{
    let {headers, body, method, query} = req
    let data = {
        headers,
        body,
        method,
        query
    }
    let name = Date.now().toString()
    writeFileSync(`${name}.${method}.json`, JSON.stringify(data, null, 4))
    return res.status(200).json({status: 1, message: "Server is running, docmenataion at: /swagger", data: null});
}