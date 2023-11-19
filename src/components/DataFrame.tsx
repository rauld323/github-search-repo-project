import { FC } from "react";

interface IProps {
  language: string;
  repoName: string;
  descriptions: string;
  link: string;
  lastUpdated: string;
}

const DataFrame: FC<IProps> = () => {
  return <div>DataFrame</div>;
};

export default DataFrame;
