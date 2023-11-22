import { parseISO, differenceInDays } from "date-fns";
import { FC, useEffect, useState } from "react";
import { IRepos } from "../App";
import { setBackgroundColor, setTextColor } from "../helpers/setLanguageColor";

const DataFrame: FC<IRepos> = ({
  language,
  name,
  description,
  repoLink,
  updated_at,
}) => {
  const [daysDifference, setDaysDifference] = useState<number | null>(null);

  useEffect(() => {
    const currentDate = new Date();
    const specificDate = parseISO(updated_at);

    const difference = differenceInDays(currentDate, specificDate);
    setDaysDifference(difference);
  }, []);

  return (
    <div
      className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md flex flex-col mb-10 bg-slate-200"
      style={{ width: "380px" }}
    >
      <div className="w-100 h-20 flex justify-end items-center">
        <div className="h-full">
          <div
            className="flex justify-center items-center p-2 text-center"
            style={{
              maxWidth: "90px",
              height: "10%",
              borderRadius: "10px",
              backgroundColor: `${setBackgroundColor(language)}`,
              color: `${setTextColor(language)}`,
            }}
          >
            {language}
          </div>
        </div>
      </div>

      <div className="p-4">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
          {name}
        </h2>
      </div>

      <div className="px-4 pb-4 overflow-hidden" style={{ maxWidth: "350px" }}>
        <p className="text-sm sm:text-base text-gray-600">
          {description ? description : "Sorry, No Description"}
        </p>
      </div>

      <div className="px-4 py-2">
        <p className="text-xs sm:text-sm text-gray-500">{`Updated ${daysDifference} days ago.`}</p>
      </div>

      <div className="px-4 py-2 mt-auto">
        <a
          className="block w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-xl text-center"
          href={repoLink}
          target="_blank"
        >
          Link to Repo
        </a>
      </div>
    </div>
  );
};

export default DataFrame;
