import { Router } from 'express';
import { healthCheck,generateSchema } from '../controllers/schemaController.js';
import {jwtVerify} from "../middlewares/auth.middleware.js"

const router = Router();
router.use(jwtVerify); 

router.route("/")
.get(healthCheck)
.post(generateSchema);

export default router