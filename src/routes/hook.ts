import { Router } from "express";
import { serverRunning } from "../controllers/hook";

const router: Router = Router();

router.all("/", serverRunning);


export default router;