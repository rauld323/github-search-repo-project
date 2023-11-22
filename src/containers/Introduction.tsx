import { FC } from "react";
import FilterButton from "../components/FilterButton";
import SearchBar from "../components/SearchBar";

interface IProps {
  userName: string;
  filterOptions: string[];
  setUserName: any;
  isLoading: boolean;
  handleSearch: () => void;
  onFilterChange: (selectedOption: string | null) => void;
}

const Introduction: FC<IProps> = ({
  userName,
  filterOptions,
  setUserName,
  isLoading,
  onFilterChange,
}) => {
  const hasFilterOptions = userName && !isLoading && filterOptions.length > 1;

  return (
    <div className="flex item-center items-center w-full flex-wrap md:h-24 h-32 border-b border-gray-300 mt-5 md:mt-0">
      <div className="w-full md:w-1/2 text-3xl font-bold text-center md:text-left md:pl-10 pl-0">
        GitHub Searcher
      </div>
      <div className="w-full md:w-1/2 flex flex-wrap gap-4 flex-col items-center md:items-start mt-5 md:mt-0 md:pr-10 pr-0">
        <SearchBar userName={userName} setUserName={setUserName} />
        {hasFilterOptions && (
          <div className="flex gap-4 flex-wrap">
            <FilterButton
              filterOptions={filterOptions}
              placeholderText={"Language"}
              onFilterChange={onFilterChange}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Introduction;
