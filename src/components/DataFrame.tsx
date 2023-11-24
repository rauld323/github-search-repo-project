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
    <div
      className="mx-auto mb-10 flex w-[350px] max-w-md flex-col overflow-hidden rounded-xl bg-white shadow-md"
      data-testid="dataFrame-container"
    >
      <div className="w-100 flex items-center p-4">
        <div
          className="min flex h-6 items-center justify-center rounded-lg p-2 text-center"
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
        <h2 className="text-lg font-semibold text-gray-800 sm:text-xl">
          {name}
        </h2>
      </div>

      <div className="overflow-hidden px-4 pb-4" style={{ maxWidth: "350px" }}>
        <p className="text-sm text-gray-600 sm:text-base">
          {description ? description : "Sorry, No Description"}
        </p>
      </div>

      <div className="px-4 py-2">
        <p className="text-xs text-gray-500 sm:text-sm">{`Updated ${daysDifference} days ago.`}</p>
      </div>

      <div className="mt-auto flex justify-center px-4 py-2">
        <a
          className="block w-40  rounded-xl bg-blue-500 px-4 py-2 text-center font-bold text-white hover:bg-blue-600"
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
