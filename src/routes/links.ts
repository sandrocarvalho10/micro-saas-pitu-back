import { Router } from 'express'
import linksController from '../controllers/links'
var cors = require('cors')

const router = Router();

router.post('/links', cors(), linksController.postLink);

router.get('/links/:code', cors(), linksController.hitLink)

router.get('/links/:code/stats', cors(), linksController.getLink)


export default router;