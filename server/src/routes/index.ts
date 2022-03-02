import {getContractors, getSpecialities} from "../controllers";
import {Router} from "express";

const router: Router = Router();

router.get("/contractors", getContractors);
router.get("/specialities", getSpecialities);

export default router;
