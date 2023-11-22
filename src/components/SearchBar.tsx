import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";

interface ISearchBarProps {
  userName: string;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar: FC<ISearchBarProps> = ({ userName, setUserName }) => {
  const handleInputChange = (e: any) => {
    setUserName(e.target.value);
  };

  return (
    <div className="border border-buttonBlue border-1 rounded-xl">
      <FontAwesomeIcon icon={faMagnifyingGlass} className="ml-5 mr-2" />
      <input
        className="w-72 h-10 outline-none rounded-xl"
        type="text"
        placeholder="Type users GitHub user name"
        value={userName}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBar;
