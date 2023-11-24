import { FC } from "react";
import githubIMage from "../../assets/github.png";

const IntialScreen: FC = () => {
  return (
    <div className="mx-8 my-8 max-w-md overflow-hidden rounded-xl bg-slate-400 bg-white shadow-md md:mx-auto md:my-28 md:max-w-4xl">
      <div className="md:flex">
        <div className="mt-5 flex flex-shrink-0 items-center justify-center px-2 md:shrink-0">
          <img
            className="max-w-48 h-auto max-h-48 w-auto object-cover"
            src={githubIMage}
            alt="GitHub Icon"
          />
        </div>
        <div className="p-8">
          <div className="text-sm font-semibold uppercase tracking-wide text-indigo-500">
            Search Through your Repos!
          </div>
          <div className="mt-1 block text-lg font-medium leading-tight text-black">
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
