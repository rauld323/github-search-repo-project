import { FC } from "react";
import FilterButton from "../components/FilterButton";
import FilterInput from "../components/FilterInput";

interface IProps {
  filterOptions: string[];
  isLoading: boolean;
  onFilterChange: (selectedOption: string | null) => void;
  handleSearchInputFilterChange: (searchQuery: string) => void | null;
}

const FilterSection: FC<IProps> = ({
  filterOptions,
  onFilterChange,
  handleSearchInputFilterChange,
}) => {
  return (
    <div className="flex justify-center items-center w-full md:justify-start md:items-stretch flex-wrap border-t border-gray-400 min-h-16 bg-white p-5">
      <div className="flex gap-4 flex-wrap justify-center ">
        <FilterInput
          filterOptions={filterOptions}
          onFilterChange={handleSearchInputFilterChange}
        />
        <FilterButton
          filterOptions={filterOptions}
          placeholderText={"Language"}
          onFilterChange={onFilterChange}
        />
      </div>
    </div>
  );
};

export default FilterSection;
