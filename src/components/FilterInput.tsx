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
    <div className="max-w-40 relative inline-block rounded-lg border border-buttonBlue text-left">
      <input
        type="text"
        placeholder="Search..."
        value={searchRepoName}
        onChange={handleInputChange}
        className="text-black-200 inline-flex w-full justify-center rounded-md bg-white px-4 py-2 text-base shadow-sm focus:outline-none"
      />
      {searchRepoName !== "" && (
        <div className="absolute z-10 mt-1 rounded-md border border-gray-300 bg-white shadow-lg">
          <ul>
            {filterOptions
              .filter((repoName) =>
                repoName.toLowerCase().includes(searchRepoName.toLowerCase()),
              )
              .map((repoName, index) => (
                <li
                  key={index}
                  className="cursor-pointer px-4 py-2 hover:bg-gray-100"
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
