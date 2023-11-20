import { FC, useState } from "react";

interface IProps {
  filterOptions: string[];
  placeholderText: string;
}

const FilterButton: FC<IProps> = ({ placeholderText }) => {
  const [showOptions, setShowOptions] = useState(false);

  const handleButtonClick = () => {
    setShowOptions(!showOptions);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          onClick={handleButtonClick}
        >
          {placeholderText}
        </button>

        {showOptions && (
          <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <div
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            ></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterButton;
