import { FC } from "react";
import { setBackgroundColor, setTextColor } from "../helpers/setLanguageColor";

interface IProps {
  language: string;
  repoName: string;
  descriptions: string;
  link: string;
  lastUpdated: string;
}

const DataFrame: FC<IProps> = ({
  language,
  repoName,
  descriptions,
  link,
  lastUpdated,
}) => {
  return (
    <div className="flex max-w-[750px] min-h-[160px] border-t border-solid border-blue-600 border-b py-[15px] px-[50px] flex-wrap justify-between">
      <div className="flex flex-col justify-between">
        <h1>{repoName}</h1>
        <div>{descriptions}</div>
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
          <div>{lastUpdated}</div>
        </div>
      </div>
      <div className="flex items-center justify-end ">
        <a
          className="flex justify-center items-center bg-buttonBlue h-[40px] w-[110px] rounded-lg text-white"
          href={link}
          target="_blank"
        >
          Link to Repo
        </a>
      </div>
    </div>
  );
};

export default DataFrame;
