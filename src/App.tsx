import DataFrame from "./components/DataFrame";
import FilterButton from "./components/FilterButton";
import SearchBar from "./components/SearchBar";

function App() {
  const myName = "rauld323";
  const languageOptions = ["CSS,HTML, JS"];
  return (
    <>
      <h1 className="text-3xl font-bold underline">Testing Environment</h1>
      <SearchBar usersName={myName} />
      <FilterButton
        filterOptions={languageOptions}
        placeholderText={"Language"}
      />
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
