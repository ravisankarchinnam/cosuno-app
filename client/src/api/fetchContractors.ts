import Api from './client';
import { IContractor } from './../context/types';

export const fetchContractors = async () => {
  let result: IContractor[] = [];
  try {
    result = await Api.get<any, IContractor[]>('/contractors');
  } catch (error: any) {
    console.log(':( Failed to get contractors: ', error);
  }
  return result;
};
