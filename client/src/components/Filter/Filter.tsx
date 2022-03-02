import React, {useState, useEffect, useRef} from "react";
import {useAppContext} from "context/AppContext";
import FilterList from "./utils/FilterList";

const Filter = (): JSX.Element | null => {
  const {specialities, handleFilterChange} = useAppContext();
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const filterOnChange = useRef({});
  filterOnChange.current = (selectedFilters: string[]) => {
    handleFilterChange(selectedFilters);
  };

  useEffect(() => {
    typeof filterOnChange.current === "function" && filterOnChange.current(selectedFilters);
  }, [selectedFilters]);

  const handleSelectFilter = (newFilter: string) => {
    let newFilters = [];
    if (selectedFilters.includes(newFilter)) {
      newFilters = selectedFilters.filter((filter) => filter !== newFilter);
    } else {
      newFilters = [...selectedFilters, newFilter];
    }
    setSelectedFilters(newFilters);
  };

  return !!specialities?.length ? (
    <FilterList selectedFilters={selectedFilters} onSelectFilter={handleSelectFilter} />
  ) : null;
};

export default Filter;
