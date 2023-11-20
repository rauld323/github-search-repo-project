import { FC } from "react";

interface IProps {
  usersName?: string | undefined;
}

const SearchBar: FC<IProps> = ({ usersName }) => {
  return (
    <div className="min-w-[460px]">
      <input
        className="w-96 h-12 border border-buttonBlue border-solid border-1 rounded-l-xl"
        type="text"
        placeholder="Type users GitHub user name"
        value={usersName}
      />
      <button className="w-24 h-12 bg-buttonBlue text-white rounded-tr-xl">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
