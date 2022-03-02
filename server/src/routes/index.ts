import {getContractors} from "controllers/contractor";
import {getSpecialities} from "controllers/speciality";
import {Router} from "express";

const router: Router = Router();

router.get("/contractors", getContractors);
router.get("/specialities", getSpecialities);

export default router;
