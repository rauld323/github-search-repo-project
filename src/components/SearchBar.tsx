import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";

interface ISearchBarProps {
  userName: string;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
  handleSearch: () => void;
}

const SearchBar: FC<ISearchBarProps> = ({
  userName,
  setUserName,
  handleSearch,
}) => {
  const handleInputChange = (e: any) => {
    setUserName(e.target.value);
  };

  const handleSubmit = () => {
    handleSearch;
  };

  return (
    <div className="max-w-[33rem] border border-buttonBlue border-1 rounded-l-xl">
      <FontAwesomeIcon icon={faMagnifyingGlass} className="ml-5 mr-2" />
      <input
        className="w-64 h-10 outline-none"
        type="text"
        placeholder="Type users GitHub user name"
        value={userName}
        onChange={handleInputChange}
      />
      <button
        type="submit"
        className="w-24 h-12 bg-buttonBlue text-white rounded-tr-xl"
        onClick={handleSubmit}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
