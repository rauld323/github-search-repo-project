import { FC } from "react";
import SearchBar from "../components/SearchBar";

interface IProps {
  userName: string;
  setUserName: any;
  fetchRepos: () => void;
}

const Header: FC<IProps> = ({ userName, setUserName, fetchRepos }) => {
  return (
    <div className="flex item-center items-center w-full flex-wrap md:h-24 h-36 border-b border-gray-100 bg-white">
      <div className="w-full md:w-1/2 text-3xl font-bold text-center md:text-left md:pl-10 pl-0 md:mt-0 mt-6">
        GitHub Searcher
      </div>
      <div className="w-full md:w-1/2 flex flex-wrap gap-4 flex-col items-center md:items-start mt-1 md:mt-0 mb-6 md:mb-0 md:pr-10 pr-0">
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
