import {Request, Response} from "express";
import {ISpeciality} from "types/speciality";

/**
 * retrieves specialities list and send response.
 *
 * @param {Request} req
 * @param {Response} res
 * @return {*}  {Promise<void>}
 */
export const getSpecialities = async (req: Request, res: Response): Promise<void> => {
  try {
    const specialities: ISpeciality[] = require("../db/specialities.json");
    res.send(specialities);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Error: " + error.message);
  }
};
