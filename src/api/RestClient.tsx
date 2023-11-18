import axios from "../../node_modules/axios/index";

const getGithubUserData = async (userName: string) => {
  const response = await axios.get(
    `https://api.github.com/users/${userName}/repos`
  );
  return response;
};

export default getGithubUserData;
