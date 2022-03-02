import { fetchContractors, fetchSpecialities } from 'api';
import { useEffect, useState } from 'react';
import { IContractor, ISpeciality } from './types';

const useApi = () => {
  const [contractors, setContractors] = useState<IContractor[]>([]);
  const [specialities, setSpecialities] = useState<ISpeciality[]>([]);

  useEffect(() => {
    const getIntialData = async () => {
      const contractorsData = await fetchContractors();
      const specialitiesData = await fetchSpecialities();
      setContractors(contractorsData);
      setSpecialities(specialitiesData);
    };
    getIntialData();
  }, []);

  return { contractors, specialities };
};

export default useApi;
