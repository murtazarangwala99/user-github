let userAvatar = document.querySelector(".user-img");
let userName = document.querySelector("#user-name");
let userBio = document.querySelector("#user-bio");
let userLocation = document.querySelector("#user-location");
let userLink = document.querySelector("#user-link");

// Fetching User Details

const UserDetailLink = "https://api.github.com/users/murtazarangwala99";

let getUser = () => {
  fetch(UserDetailLink)
    .then((response) => response.json())
    .then((data) => {
      userName.innerHTML = data.name;
      userBio.innerText = data.bio;
      userLocation.innerText = data.location;
      userAvatar.src = data.avatar_url;
      userLink.innerText = data.html_url;
      userLink.href = data.html_url;
    })
    .catch((error) => {
      console.error("Fetch error:", error);
    });
};

document.addEventListener("DOMContentLoaded", getUser);
