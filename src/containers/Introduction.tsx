import { FC } from "react";
import FilterButton from "../components/FilterButton";
import SearchBar from "../components/SearchBar";

interface IProps {
  userName: string;
  filterOptions: string[];
}

const Introduction: FC<IProps> = ({ userName, filterOptions }) => {
  return (
    <div className="flex flex-col item-center items-center">
      <h1 className="text-3xl font-bold underline mb-12">
        Testing Environment
      </h1>
      <div className="flex mb-5 flex-wrap items-center gap-4 items-center justify-center">
        <SearchBar usersName={userName} />
        <div className="flex gap-4 flex-wrap">
          <FilterButton
            filterOptions={filterOptions}
            placeholderText={"Language"}
          />
          <FilterButton
            filterOptions={filterOptions}
            placeholderText={"Language"}
          />
        </div>
      </div>
    </div>
  );
};

export default Introduction;
