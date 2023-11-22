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
    <div className="flex flex-col item-center items-center">
      <h1 className="text-3xl font-bold underline mb-12">
        GitHub Repo Searcher
      </h1>
      <div className="flex mb-5 flex-wrap items-center gap-4 items-center justify-center flex-col">
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
