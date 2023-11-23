import React, { useState, useEffect } from "react";

interface FilterInputProps {
  filterOptions: string[];
  onFilterChange: (searchRepoName: string) => void | null;
}

const FilterInput: React.FC<FilterInputProps> = ({
  filterOptions,
  onFilterChange,
}) => {
  const [searchRepoName, setSearchRepoName] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchRepoName(event.target.value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      return onFilterChange(searchRepoName);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchRepoName, onFilterChange]);

  return (
    <div className="relative inline-block text-left border border-buttonBlue rounded-lg max-w-40">
      <input
        type="text"
        placeholder="Search..."
        value={searchRepoName}
        onChange={handleInputChange}
        className="inline-flex justify-center w-full rounded-md shadow-sm bg-white px-4 py-2 text-sm text-black-200 focus:outline-none"
      />
      {searchRepoName !== "" && (
        <div className="absolute z-10 mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
          <ul>
            {filterOptions
              .filter((repoName) =>
                repoName.toLowerCase().includes(searchRepoName.toLowerCase()),
              )
              .map((repoName, index) => (
                <li
                  key={index}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                  onClick={() => {
                    setSearchRepoName(repoName);
                    onFilterChange(repoName);
                  }}
                >
                  {repoName}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FilterInput;
