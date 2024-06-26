import {Request, Response} from "express";
import {IContractor} from "types/contractors";
import contractorData from "../db/contractors.json";

/**
 * retrieves contractors list and send response.
 *
 * @param {Request} req
 * @param {Response} res
 * @return {*}  {Promise<void>}
 */
export const getContractors = async (req: Request, res: Response): Promise<void> => {
  try {
    const contractors: IContractor[] = await contractorData;
    res.send(contractors);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Error: " + error.message);
  }
};
