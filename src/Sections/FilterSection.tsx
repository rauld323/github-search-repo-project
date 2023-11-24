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
    <div className="min-h-16 flex w-full flex-wrap items-center justify-center border-t border-gray-400 bg-white p-5 md:items-stretch">
      <div className="flex flex-wrap justify-center gap-4 ">
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
