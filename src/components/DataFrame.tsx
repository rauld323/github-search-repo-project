import { FC } from "react";
import { IRepos } from "../api/RestClient";
import { setBackgroundColor, setTextColor } from "../helpers/setLanguageColor";

const DataFrame: FC<IRepos> = ({
  language,
  name,
  description,
  svn_url,
  updated_at,
}) => {
  return (
    <div className="flex max-w-[750px] min-h-[160px] border-t border-solid border-blue-600 border-b py-[15px] px-[50px] flex-wrap justify-between">
      <div className="flex flex-col justify-between">
        <h1>{name}</h1>
        <div>{description}</div>
        <div className="flex flex-wrap-reverse">
          <div
            className="mr-5 min-w-[60px] text-center rounded-lg h-auto px-5"
            style={{
              backgroundColor: `${setBackgroundColor(language)}`,
              color: `${setTextColor(language)}`,
            }}
          >
            {language}
          </div>
          <div>{updated_at}</div>
        </div>
      </div>
      <div className="flex items-center justify-end ">
        <a
          className="flex justify-center items-center bg-buttonBlue h-[40px] w-[110px] rounded-lg text-white"
          href={svn_url}
          target="_blank"
        >
          Link to Repo
        </a>
      </div>
    </div>
  );
};

export default DataFrame;
