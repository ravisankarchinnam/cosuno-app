import Api from "./client";
import {IContractor} from "./../context/types";

export const fetchSpecialities = async () => {
  let result: IContractor[] = [];
  try {
    result = await Api.get<any, IContractor[]>("/specialities");
  } catch (error: any) {
    console.log(":( Failed to get specialities: ", error);
  }
  return result;
};
