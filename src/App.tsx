import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import DataFrame from "./components/DataFrame";
import ScrollButton from "./components/ScrollButton";
import FilterSection from "./Sections/FilterSection";
import Header from "./Sections/Header";
import EmptyRepoScreen from "./Sections/screens/EmptyRepoScreen";
import ErrorScreen from "./Sections/screens/ErrorScreen";
import IntialScreen from "./Sections/screens/IntialScreen";
import LoadingScreen from "./Sections/screens/LoadingScreen";
import { getUniqueStrings } from "./helpers/filterLanguageOptions";
import { replaceNullWithNA } from "./helpers/validateLanguageString";

export interface IRepos {
  name: string;
  language: string;
  description?: string;
  svn_url: string;
  updated_at: string;
}

function App() {
  const [userName, setUserName] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
  const [searchRepoName, setSearchRepoName] = useState<string>("");

  const {
    data: repos,
    isLoading,
    refetch,
    error,
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
    enabled: false,
  });

  const fetchRepos = () => {
    refetch();
  };

  const userLanguages = repos?.map((repo: IRepos) => repo.language);

  const filterLanguages: string[] = userLanguages
    ? getUniqueStrings(replaceNullWithNA(userLanguages))
    : [];

  const handleFilterChange = (selectedOption: string | null) => {
    setSelectedLanguage(selectedOption);
  };

  const handleSearchRepoNameChange = (searchRepoName: string) => {
    setSearchRepoName(searchRepoName);
  };

  const filteredRepos = repos?.filter((repo: IRepos) => {
    const languageMatches =
      !selectedLanguage ||
      replaceNullWithNA([repo.language]).includes(selectedLanguage);

    const repoNameMatches =
      searchRepoName === "" ||
      repo.name.toLowerCase().includes(searchRepoName.toLowerCase());

    return languageMatches && repoNameMatches;
  });

  const userHasFilterLanguages =
    userName && !isLoading && filterLanguages.length > 1;

  const didNotFindAnyRepos = filteredRepos?.length === 0;

  const userHasNoRepos = userName && repos?.length === 0;

  return (
    <>
      <Header
        userName={userName}
        setUserName={setUserName}
        fetchRepos={fetchRepos}
      />

      {userHasFilterLanguages && (
        <FilterSection
          filterOptions={filterLanguages}
          isLoading={isLoading}
          onFilterChange={handleFilterChange}
          handleSearchInputFilterChange={handleSearchRepoNameChange}
        />
      )}

      {!repos && !isLoading && !error && <IntialScreen />}

      <div className="flex flex-wrap justify-between gap-5 p-10">
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
        {didNotFindAnyRepos && !userHasNoRepos && (
          <EmptyRepoScreen didNotMatchRepos={didNotFindAnyRepos} />
        )}
        {error && <ErrorScreen />}
      </div>
    </>
  );
}

export default App;
