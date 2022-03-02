import {Request, Response} from "express";
import {ISpeciality} from "types/speciality";
import specialitiesData from "../db/specialities.json";

/**
 * retrieves specialities list and send response.
 *
 * @param {Request} req
 * @param {Response} res
 * @return {*}  {Promise<void>}
 */
export const getSpecialities = async (req: Request, res: Response): Promise<void> => {
  try {
    const specialities: ISpeciality[] = await specialitiesData;
    res.send(specialities);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Error: " + error.message);
  }
};
