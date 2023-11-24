import { useState, useRef, useEffect, FC } from "react";

interface IProps {
  filterOptions: string[];
  onFilterChange: (selectedOption: string | null) => void;
  placeholderText: string;
}

const FilterButton: FC<IProps> = ({
  filterOptions,
  onFilterChange,
  placeholderText,
}) => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleButtonClick = () => {
    setShowOptions(!showOptions);
  };

  const handleOptionClick = (language: string) => {
    setSelectedOption(language);
    onFilterChange(language);
    setShowOptions(false);
  };

  const handleClearAll = () => {
    setSelectedOption(null);
    onFilterChange(null);
    setShowOptions(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setShowOptions(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (selectedOption) {
      onFilterChange(selectedOption);
    } else {
      onFilterChange(null);
    }
  }, [selectedOption, onFilterChange]);

  return (
    <div className="relative inline-block text-left  max-w-40">
      <button
        type="button"
        className="inline-flex justify-center rounded-lg border border-buttonBlue shadow-sm bg-white px-4 py-2 text-base font-medium text-buttonBlue hover:bg-gray-50 focus:outline-none"
        onClick={handleButtonClick}
      >
        {selectedOption
          ? `${placeholderText}: ${selectedOption}`
          : `Select ${placeholderText}`}
      </button>

      {showOptions && (
        <div
          ref={dropdownRef}
          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
        >
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
                className="block w-full px-4 py-2 text-left text-sm text-buttonBlue hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                {language}
              </button>
            ))}
          </div>
          <button
            onClick={handleClearAll}
            className="block w-full text-left px-4 py-2 text-sm text-buttonBlue hover:bg-gray-100 hover:text-gray-900"
          >
            Clear All
          </button>
        </div>
      )}
    </div>
  );
};

export default FilterButton;
