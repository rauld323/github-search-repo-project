import { FC, useState } from "react";

interface IProps {
  filterOptions: string[];
  placeholderText: string;
}

const FilterButton: FC<IProps> = ({ placeholderText, filterOptions }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleButtonClick = () => {
    setShowOptions(!showOptions);
  };

  const handleOptionClick = (language: string) => {
    setSelectedOption(language);
    setShowOptions(false);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          onClick={handleButtonClick}
          disabled={filterOptions ? false : true}
        >
          {selectedOption
            ? `${placeholderText}: ${selectedOption}`
            : `Select ${placeholderText}`}
        </button>

        {showOptions && (
          <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <div
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              {filterOptions.map((language) => (
                <button
                  key={language}
                  onClick={() => handleOptionClick(language)}
                  className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                >
                  {language}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterButton;
