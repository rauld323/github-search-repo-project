import githubCharacter from "../../assets/githubCharacter.png";

const ErrorScreen = () => {
  return (
    <div className="flex flex-col justify-center items-center max-w-md mx-auto gap-10 my-12 md:my-28">
      <div className="md:shrink-0 flex-shrink-0 flex justify-center items-center px-2">
        <img
          className="max-h-48 max-w-48 h-auto w-auto object-cover"
          src={githubCharacter}
          alt="GitHub Icon"
        />
      </div>
      <div className="text-lg font-medium text-black">
        Opps seems like we encoutered an error :0
      </div>
    </div>
  );
};

export default ErrorScreen;