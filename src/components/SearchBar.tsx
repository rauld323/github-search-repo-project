import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";

interface ISearchBarProps {
  userName: string;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
  fetchRepos: () => void;
}

const SearchBar: FC<ISearchBarProps> = ({
  userName,
  setUserName,
  fetchRepos,
}) => {
  const handleInputChange = (e: any) => {
    setUserName(e.target.value);
  };

  return (
    <div className="border border-buttonBlue border-1 rounded-xl bg-white">
      <FontAwesomeIcon icon={faMagnifyingGlass} className="ml-5 mr-2" />
      <input
        className="w-60 h-10 outline-none rounded-xl"
        type="text"
        placeholder="Type GitHub user name"
        value={userName}
        onChange={handleInputChange}
      />
      <button
        className="bg-buttonBlue w-16 h-10 overflow-hidden rounded-tr-lg rounded-br-lg text-white"
        onClick={fetchRepos}
      >
        Submit
      </button>
    </div>
  );
};

export default SearchBar;
