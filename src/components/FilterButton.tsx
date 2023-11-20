import { FC } from "react";

interface IProps {
  filterOptions: string[];
  placeholderText: string;
}

const FilterButton: FC<IProps> = ({ placeholderText }) => {
  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          {placeholderText}
        </button>
      </div>
    </div>
  );
};

export default FilterButton;
