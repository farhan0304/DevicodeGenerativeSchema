import { Router } from 'express';
import { generateSchema } from '../controllers/schemaController.js';
import {jwtVerify} from "../middlewares/auth.middleware.js"

const router = Router();
router.use(jwtVerify); 

router.route("/").get(generateSchema);

export default router