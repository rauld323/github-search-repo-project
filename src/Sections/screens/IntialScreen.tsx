import { FC } from "react";
import githubIMage from "../../assets/github.png";

const IntialScreen: FC = () => {
  return (
    <div className="max-w-md md:mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-4xl bg-slate-400 mx-8 my-8 md:my-28">
      <div className="md:flex">
        <div className="md:shrink-0 flex-shrink-0 flex justify-center items-center px-2 mt-5">
          <img
            className="max-h-48 max-w-48 h-auto w-auto object-cover"
            src={githubIMage}
            alt="GitHub Icon"
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            Search Through your Repos!
          </div>
          <div className="block mt-1 text-lg leading-tight font-medium text-black">
            It has never been this easy!
          </div>
          <p className="mt-2 text-slate-500">
            Looking to take your team away on a retreat to enjoy awesome food
            and take in some sunshine? We have a list of places to do just that.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate
            officiis fugit aut alias voluptates laborum aliquam laudantium
            libero eum explicabo voluptatum suscipit sed non mollitia quos, cum
            at eius. Ipsam! Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Nemo, fuga. Eos quia recusandae minus quam cum ipsa magnam at!
            Illo architecto repellendus odio iste vel excepturi molestiae
            laudantium, explicabo odit?
          </p>
        </div>
      </div>
    </div>
  );
};

export default IntialScreen;
