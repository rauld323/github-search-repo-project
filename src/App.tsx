import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import DataFrame from "./components/DataFrame";
import Introduction from "./containers/Introduction";
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

  return (
    <>
      <Introduction
        userName={userName}
        filterOptions={filterOptions}
        setUserName={setUserName}
        handleSearch={handleSearch}
        repos={userLanguages}
        isLoading={isLoading}
      />
      <div className="flex flex-wrap justify-between">
        {!userName && !isLoading && <IntialScreen />}

        {isLoading ? (
          <LoadingScreen />
        ) : (
          repos?.map((repo: IRepos, index: number) => (
            <>
              {
                <DataFrame
                  key={index}
                  language={repo.language}
                  name={repo.name}
                  description={repo.description}
                  svn_url={repo.svn_url}
                  updated_at={`Update ${repo.updated_at} days ago`}
                />
              }
            </>
          ))
        )}
      </div>
    </>
  );
}

export default App;
