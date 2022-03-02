import {fetchContractors, fetchSpecialities} from "api";
import {useEffect, useState} from "react";
import {IContractor, ISpeciality} from "./types";

const useApi = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [contractors, setContractors] = useState<IContractor[]>([]);
  const [specialities, setSpecialities] = useState<ISpeciality[]>([]);

  useEffect(() => {
    const getIntialData = async () => {
      setLoading(true);
      const contractorsData = await fetchContractors();
      const specialitiesData = await fetchSpecialities();
      setContractors(contractorsData);
      setSpecialities(specialitiesData);
      setLoading(false);
    };
    getIntialData();
  }, []);

  return {loading, contractors, specialities};
};

export default useApi;
