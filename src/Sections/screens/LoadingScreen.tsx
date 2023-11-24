import githubCharacter from "../../assets/githubCharacter.png";

const LoadingScreen = () => {
  return (
    <div className="mx-auto my-12 flex max-w-md flex-col items-center justify-center gap-10 md:my-20">
      <div className="flex flex-shrink-0 animate-spin items-center justify-center px-2 md:shrink-0">
        <img
          className="max-w-48 h-auto max-h-48 w-auto object-cover"
          src={githubCharacter}
          alt="GitHub Icon"
        />
      </div>
      <div className="text-center text-lg font-medium text-black">
        Loading...
      </div>
    </div>
  );
};

export default LoadingScreen;
