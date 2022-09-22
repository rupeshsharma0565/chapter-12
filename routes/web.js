import express from 'express';
const router = express.Router();
import {homeControllers} from '../controllers/homeControllers.js'
import {aboutControllers} from '../controllers/aboutControllers.js'

router.get('/',homeControllers);
router.get('/about',aboutControllers);

export default router
