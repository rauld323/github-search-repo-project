import { FC } from "react";
import FilterButton from "../components/FilterButton";
import FilterInput from "../components/FilterInput";
import SearchBar from "../components/SearchBar";

interface IProps {
  userName: string;
  filterOptions: string[];
  setUserName: any;
  handleSearch: () => void;
}
const handleFilterChange = (selectedOption: string | null) => {
  console.log("Selected Language:", selectedOption);
};

const handleSearchInputChange = (repo: string | null) => {
  console.log("Search repo:", repo);
};

const Introduction: FC<IProps> = ({
  userName,
  filterOptions,
  setUserName,
  handleSearch,
}) => {
  return (
    <div className="flex flex-col item-center items-center">
      <h1 className="text-3xl font-bold underline mb-12">
        Testing Environment
      </h1>
      <div className="flex mb-5 flex-wrap items-center gap-4 items-center justify-center">
        <SearchBar
          userName={userName}
          setUserName={setUserName}
          handleSearch={handleSearch}
        />
        <div className="flex gap-4 flex-wrap">
          <FilterInput filterOptions={[]} onFilterChange={handleFilterChange} />
          <FilterButton
            filterOptions={filterOptions}
            placeholderText={"Language"}
            onFilterChange={handleSearchInputChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Introduction;
