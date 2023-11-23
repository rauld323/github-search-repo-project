import githubCharacter from "../../assets/githubCharacter.png";

const EmptyRepoScreen = () => {
  return (
    <div className="flex flex-col justify-center items-center max-w-md mx-auto gap-10 my-12">
      <div className="md:shrink-0 flex-shrink-0 flex justify-center items-center px-2">
        <img
          className="max-h-48 max-w-48 h-auto w-auto object-cover"
          src={githubCharacter}
          alt="GitHub Icon"
        />
      </div>
      <div className="text-lg font-medium text-black">User has no Repos :(</div>
    </div>
  );
};

export default EmptyRepoScreen;
