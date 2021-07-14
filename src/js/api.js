
let avatar = document.getElementById("avatar");
let username = document.getElementById("username");
let userlink = document.getElementById("userlink");

let repo_num = document.getElementById("repos_val");
let following_num = document.getElementById("following_val");
let follower_num = document.getElementById("followers_val");

let followers = document.getElementById("followers");

let loading = document.getElementById("loading");

fetch("https://api.github.com/users/niyoj")
.then(response => response.json())
.then(function (data) {
    avatar.src = data.avatar_url;
    username.innerHTML = data.name;
    userlink.href = data.html_url;

    repo_num.innerHTML = data.public_repos;
    following_num.innerHTML = data.following;
    follower_num.innerHTML = data.followers;

    followers.href = data.followers_url;

    loading.classList.add("loaded");
});