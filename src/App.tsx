import { getGithubUserRepos, IRepos } from "./api/RestClient";
import DataFrame from "./components/DataFrame";
import Introduction from "./containers/Introduction";
import { getUniqueStrings } from "./helpers/filterLanguageOptions";

function App() {
  const myName = "rauld323";

  const { data: repos } = getGithubUserRepos(myName);

  const userLanguages = repos?.map((repo: IRepos) => repo.language);

  const filterOptions: string[] = userLanguages
    ? getUniqueStrings(userLanguages)
    : [];

  return (
    <>
      <Introduction userName={myName} filterOptions={filterOptions} />
      {repos?.map((repo: IRepos, index: number) => (
        <>
          <DataFrame
            key={index}
            language={repo.language}
            name={repo.name}
            description={repo.description}
            svn_url={repo.svn_url}
            updated_at={`Update ${repo.updated_at} days ago`}
          />
        </>
      ))}
    </>
  );
}

export default App;
