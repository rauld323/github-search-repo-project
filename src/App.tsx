import { getGithubUserRepos, IRepos } from "./api/RestClient";
import DataFrame from "./components/DataFrame";
import Introduction from "./containers/Introduction";

function App() {
  const myName = "rauld323";
  const languagOptions = ["HTML", "CSS", "JavaScript", "TypeScript"];
  const { data: repos } = getGithubUserRepos(myName);

  return (
    <>
      <Introduction userName={myName} filterOptions={languagOptions} />
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
