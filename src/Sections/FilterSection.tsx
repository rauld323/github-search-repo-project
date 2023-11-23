import { FC } from "react";
import FilterButton from "../components/FilterButton";
import FilterInput from "../components/FilterInput";

interface IProps {
  filterOptions: string[];
  isLoading: boolean;
  onFilterChange: (selectedOption: string | null) => void;
}

const FilterSection: FC<IProps> = ({ filterOptions, onFilterChange }) => {
  return (
    <div className="flex justify-center items-center w-full flex-wrap border-b border-gray-400 h-14 bg-white">
      <div className="flex gap-4 flex-wrap">
        <FilterInput
          filterOptions={filterOptions}
          onFilterChange={onFilterChange}
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
