import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import DataFrame from "./components/DataFrame";
import ScrollButton from "./components/ScrollButton";
import FilterSection from "./containers/FilterSection";
import Header from "./containers/Header";
import EmptyRepoScreen from "./containers/screens/EmptyRepoScreen";
import IntialScreen from "./containers/screens/IntialScreen";
import LoadingScreen from "./containers/screens/LoadingScreen";
import { getUniqueStrings } from "./helpers/filterLanguageOptions";

export interface IRepos {
  name: string;
  language: string;
  description?: string;
  svn_url: string;
  updated_at: string;
}

function App() {
  const [userName, setUserName] = useState("");
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

  const {
    data: repos,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["userRepos", userName],
    queryFn: async () => {
      if (!userName) {
        return [];
      }
      const response = await axios(
        `https://api.github.com/users/${userName}/repos`,
      );
      return response.data;
    },
  });

  const handleSearch = () => {
    refetch();
  };

  const userLanguages = repos?.map((repo: IRepos) => repo.language);

  const filterOptions: string[] = userLanguages
    ? getUniqueStrings(userLanguages)
    : [];

  const handleFilterChange = (selectedOption: string | null) => {
    setSelectedFilter(selectedOption);
  };

  const filteredRepos = selectedFilter
    ? repos?.filter((repo: IRepos) => repo.language === selectedFilter)
    : repos;

  const userHasNoRepos = userName && repos?.length === 0;

  const hasFilterOptions = userName && !isLoading && filterOptions.length > 1;

  return (
    <>
      <Header
        userName={userName}
        filterOptions={filterOptions}
        setUserName={setUserName}
        handleSearch={handleSearch}
        isLoading={isLoading}
        onFilterChange={handleFilterChange}
      />
      {hasFilterOptions && (
        <FilterSection
          filterOptions={filterOptions}
          isLoading={isLoading}
          onFilterChange={handleFilterChange}
        />
      )}

      {!userName && !isLoading && <IntialScreen />}

      <div className="flex flex-wrap justify-between p-10">
        {isLoading ? (
          <LoadingScreen />
        ) : userHasNoRepos ? (
          <EmptyRepoScreen />
        ) : (
          filteredRepos?.map((repo: IRepos, index: number) => (
            <>
              <DataFrame
                key={index}
                language={repo.language}
                name={repo.name}
                description={repo.description}
                svn_url={repo.svn_url}
                updated_at={repo.updated_at}
              />
              {filteredRepos.length >= 10 && <ScrollButton />}
            </>
          ))
        )}
      </div>
    </>
  );
}

export default App;
