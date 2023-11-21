import { useQuery } from "@tanstack/react-query";
import axios from "../../node_modules/axios/index";

export interface IRepos {
  name: string;
  language: string;
  description: string;
  svn_url: string;
  updated_at: string;
}

const fetchRepositories = async (username: string): Promise<IRepos[]> => {
  const response = await axios.get(
    `https://api.github.com/users/${username}/repos`,
  );
  return response.data;
};

export const getGithubUserRepos = (userName: string) => {
  return useQuery({
    queryKey: ["userRepos"],
    queryFn: () => fetchRepositories(userName),
  });
};
