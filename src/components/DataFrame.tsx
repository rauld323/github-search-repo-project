import { parseISO, differenceInDays } from "date-fns";
import { FC, useEffect, useState } from "react";
import { IRepos } from "../App";
import { setBackgroundColor, setTextColor } from "../helpers/setLanguageColor";
import { validateLanguageString } from "../helpers/validateLanguageString";

const DataFrame: FC<IRepos> = ({
  language,
  name,
  description,
  svn_url,
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
    <div className="w-[350px] max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md flex flex-col mb-10">
      <div className="w-100 flex items-center p-4">
        <div
          className="flex justify-center items-center p-2 text-center h-6 min rounded-lg"
          style={{
            minWidth: "90px",
            backgroundColor: `${setBackgroundColor(language)}`,
            color: `${setTextColor(language)}`,
          }}
        >
          {validateLanguageString(language)}
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

      <div className="px-4 py-2 mt-auto flex justify-center">
        <a
          className="block w-40  bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-xl text-center"
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
