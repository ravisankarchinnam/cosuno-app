import React, {
  ChangeEvent,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { AppContextProps, AppContextProviderProps } from './types';
import { getFormattedContractors } from 'context/helpers';
import useApi from './hooks';

const AppContext = createContext<AppContextProps>({} as AppContextProps);

const AppContextProvider = ({
  children,
}: AppContextProviderProps): JSX.Element => {
  const { contractors, specialities } = useApi();
  const [rows, setRows] = useState(contractors);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  useEffect(() => {
    setRows(contractors);
  }, [contractors]);

  const handleSearchChange = (term: string) => {
    let newRows = contractors;
    if (term) {
      newRows = getFormattedContractors(term, contractors);
    }
    setRows(newRows);
  };

  const handleFilterChange = (selectedFitlers: string[]) => {
    let newRows = contractors;
    if (!!selectedFitlers?.length) {
      newRows =
        contractors?.filter((row) =>
          selectedFitlers?.some((filter) => filter === row?.specialities)
        ) ?? [];
    }
    setRows(newRows);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <AppContext.Provider
      value={{
        specialities,
        rows,
        page,
        rowsPerPage,
        handleChangePage,
        handleChangeRowsPerPage,
        handleFilterChange,
        handleSearchChange,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;

export const useAppContext = () => useContext(AppContext);
