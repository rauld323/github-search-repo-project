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
    <div className="border-1 rounded-xl border border-buttonBlue bg-white">
      <FontAwesomeIcon icon={faMagnifyingGlass} className="ml-5 mr-2" />
      <input
        className="h-10 w-60 rounded-xl outline-none"
        type="text"
        placeholder="Type GitHub user name"
        value={userName}
        onChange={handleInputChange}
      />
      <button
        className="h-10 w-16 overflow-hidden rounded-br-lg rounded-tr-lg bg-buttonBlue text-white disabled:opacity-75"
        onClick={fetchRepos}
        disabled={!userName}
      >
        Submit
      </button>
    </div>
  );
};

export default SearchBar;
