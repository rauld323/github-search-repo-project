import { parseISO, differenceInDays } from "date-fns";
import { FC, useEffect, useState } from "react";
import { IRepos } from "../App";
import { setBackgroundColor, setTextColor } from "../helpers/setLanguageColor";

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
      className="border border-black"
      style={{
        width: "350px",
        height: "300px",
        padding: "10px",
        borderRadius: "10px",
        marginBottom: "50px",
      }}
    >
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

      <div
        className="flex justify-start text-30 flex-wrap"
        style={{
          fontSize: "30px",
          height: "30%",
        }}
      >
        {name}
      </div>

      <div
        className=" flex flex-wrap border border-black "
        style={{
          height: "40%",
          borderRadius: "10px",
        }}
      >
        {description ? description : "Sorry, No Desd"}
      </div>

      <div
        className="flex justify-between items-center h-20"
        style={{
          height: "20%",
        }}
      >
        <div>{`Updated ${daysDifference} days ago.`}</div>
        <div>
          <a
            className="flex justify-center items-center bg-buttonBlue h-[40px] w-[110px] rounded-lg text-white"
            href={svn_url}
            target="_blank"
          >
            Link to Repo
          </a>
        </div>
      </div>
    </div>
  );
};

export default DataFrame;
