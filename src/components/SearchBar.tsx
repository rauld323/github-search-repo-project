import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";

interface IProps {
  usersName?: string | undefined;
}

const SearchBar: FC<IProps> = ({ usersName }) => {
  return (
    <div className="max-w-[33rem] border border-buttonBlue border-1 rounded-l-xl">
      <FontAwesomeIcon icon={faMagnifyingGlass} className="ml-5 mr-2" />
      <input
        className="w-64 h-10 outline-none"
        type="text"
        placeholder="Type users GitHub user name"
        value={usersName}
      />
      <button
        className="w-24 h-12 bg-buttonBlue text-white rounded-tr-xl"
        onClick={undefined}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
