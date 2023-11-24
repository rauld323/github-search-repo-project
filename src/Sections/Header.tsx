import { FC } from "react";
import SearchBar from "../components/SearchBar";

interface IProps {
  userName: string;
  setUserName: any;
  fetchRepos: () => void;
}

const Header: FC<IProps> = ({ userName, setUserName, fetchRepos }) => {
  return (
    <div className="item-center flex h-36 w-full flex-wrap items-center border-b border-gray-100 bg-white md:h-24">
      <div className="mt-6 w-full pl-0 text-center text-3xl font-bold md:mt-0 md:w-1/2 md:pl-10 md:text-left">
        GitHub Searcher
      </div>
      <div className="mb-6 mt-1 flex w-full flex-col flex-wrap items-center gap-4 pr-0 md:mb-0 md:mt-0 md:w-1/2 md:items-start md:pr-10">
        <SearchBar
          userName={userName}
          setUserName={setUserName}
          fetchRepos={fetchRepos}
        />
      </div>
    </div>
  );
};

export default Header;
