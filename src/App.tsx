import DataFrame from "./components/DataFrame";
import Introduction from "./containers/Introduction";

function App() {
  const myName = "";
  const languagOptions = ["HTML", "CSS", "JavaScript", "TypeScript"];
  return (
    <>
      <Introduction userName={myName} filterOptions={languagOptions} />
      <DataFrame
        language={"CSS"}
        repoName={"react-portfolio-2023"}
        descriptions={"Updated portfolio using react"}
        link={"https://tailwindcss.com/docs/width"}
        lastUpdated={"Updated 5 days ago"}
      />
    </>
  );
}

export default App;
