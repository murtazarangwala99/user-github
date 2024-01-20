const userUrl = "https://api.github.com/users/murtazarangwala99/repos";

const getUserRepos = () => {
  fetch(userUrl)
    .then((data) => data.json())
    .then((repos) => {
      repos.forEach((repo) => {
        handleRepoData(repo);
      });
    })
    .catch((error) => {
      console.error("Fetch error:", error);
    });
};

getUserRepos();

const handleRepoData = async (repo) => {
  const repoContainer = document.getElementById("card-container");

  // Fetching languages for repos
  const languages = await fetch(`${repo.languages_url}`).then((data) => data.json());

  // creating Card
  const card = document.createElement("div");
  card.classList.add("card");

  // Populating card content
  card.innerHTML = `
  <h2>${repo.name}</h2>
  <p>${repo.description || "No description available"}</p>
  <div class="languages-container">
  <div class="languages-name">
  ${Object.keys(languages)
    .map((lang) => `<p class="languages">${lang}</p>`)
    .join("")}
  </div>
  </div>
  <a href="${repo.html_url}" target="_blank">GitHub Link</a>
`;

  repoContainer.appendChild(card);
};
