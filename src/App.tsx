import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import DataFrame from "./components/DataFrame";
import Introduction from "./containers/Introduction";
import EmptyRepoScreen from "./containers/screens/EmptyRepoScreen";
import IntialScreen from "./containers/screens/IntialScreen";
import LoadingScreen from "./containers/screens/LoadingScreen";
import { getUniqueStrings } from "./helpers/filterLanguageOptions";

export interface IRepos {
  name: string;
  language: string;
  description?: string;
  repoLink: string;
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

  return (
    <>
      <Introduction
        userName={userName}
        filterOptions={filterOptions}
        setUserName={setUserName}
        handleSearch={handleSearch}
        isLoading={isLoading}
        onFilterChange={handleFilterChange}
      />
      <div className="flex flex-wrap justify-between">
        {!userName && !isLoading && <IntialScreen />}

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
                repoLink={repo.repoLink}
                updated_at={repo.updated_at}
              />
            </>
          ))
        )}
      </div>
    </>
  );
}

export default App;
