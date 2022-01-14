const axios = require('axios');

const filterByLang = (repos, lang) => {
  const filteredRepos = repos.filter(repo => repo.language === lang);
  return filteredRepos.slice(0, 5);
}

const clearInformation = (repos) => {
  return repos.map(({ name, description, owner: {avatar_url} }, index) => ({id: index + 1, name, description, avatar: avatar_url}))
}

module.exports = async (gitHubUser, language) => {
  const URL = `https://api.github.com/orgs/${gitHubUser}/repos?sort=created&direction=asc`;
  const { data } = await axios.get(URL);
  const filteredRepos = filterByLang(data, language);
  const cleanedRepos = clearInformation(filteredRepos);
  return cleanedRepos;
}