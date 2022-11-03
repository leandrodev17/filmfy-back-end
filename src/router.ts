import express from 'express';
import {Request, Response} from 'express';
const routers = express.Router()

routers.get('/teste', (req: Request, res: Response) => {
    return res.json({'SUCESS': 'FOI'})
})

module.exports = routers 