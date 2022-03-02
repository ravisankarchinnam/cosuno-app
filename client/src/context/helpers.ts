import { IContractor } from 'context/types';

export const getFormattedContractors = (
  term: string,
  contractors?: IContractor[]
): IContractor[] => {
  const result: IContractor[] = [];
  contractors?.forEach((contractor) => {
    let regex = new RegExp(term, 'gi');
    const name = contractor?.name;
    if (regex.test(name)) {
      result.push({
        ...contractor,
        name: name.replace(regex, `<b>${term}</b>`),
      });
    }
  });

  return result;
};
