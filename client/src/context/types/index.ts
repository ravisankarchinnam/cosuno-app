import { ReactNode } from 'react';

export interface ISpeciality {
  id: number;
  name: string;
}

export interface IContractor {
  id: number;
  name: string;
  city: string;
  specialities: string;
  logo: string;
}

export interface AppContextProps {
  specialities: ISpeciality[];
  rows: IContractor[];
  page: number;
  rowsPerPage: number;
  handleChangePage: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    page: number
  ) => void;
  handleChangeRowsPerPage?: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  >;
  handleFilterChange: (filters: string[]) => void;
  handleSearchChange: (value: string) => void;
}

export interface AppContextProviderProps {
  children: ReactNode;
}
