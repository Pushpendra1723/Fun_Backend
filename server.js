const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

const Pushpendra = {
  login: "Pushpendra1723",
  id: 94159743,
  node_id: "U_kgDOBZzDfw",
  avatar_url: "https://avatars.githubusercontent.com/u/94159743?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/Pushpendra1723",
  html_url: "https://github.com/Pushpendra1723",
  followers_url: "https://api.github.com/users/Pushpendra1723/followers",
  following_url:
    "https://api.github.com/users/Pushpendra1723/following{/other_user}",
  gists_url: "https://api.github.com/users/Pushpendra1723/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/Pushpendra1723/starred{/owner}{/repo}",
  subscriptions_url:
    "https://api.github.com/users/Pushpendra1723/subscriptions",
  organizations_url: "https://api.github.com/users/Pushpendra1723/orgs",
  repos_url: "https://api.github.com/users/Pushpendra1723/repos",
  events_url: "https://api.github.com/users/Pushpendra1723/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/Pushpendra1723/received_events",
  type: "User",
  site_admin: false,
  name: "PUSHPENDRA KUMAR",
  company: "Solar Secure Solutions",
  blog: "",
  location: "Gorakhpur,India",
  email: null,
  hireable: true,
  bio: "Dedicated and skilled Frontend Developer with a strong foundation in Information Technology, Committed for delivering high-quality, user-friendly web experience",
  twitter_username: null,
  public_repos: 29,
  public_gists: 0,
  followers: 2,
  following: 0,
  created_at: "2021-11-12T05:46:44Z",
  updated_at: "2024-01-20T22:56:15Z",
};



app.get("/", (req, res) => {
  res.send("Hi, Myself Pushpendra Kumar ,This message is send by the server in response to your request Which is initiated by you when you clicked the Link");
});

app.get("/my", (req, res) => {
  res.send("My name is Pushpendra kumar , this res is send by server");
});

app.get("/Pushpendra", (req, res) => {
  res.json(Pushpendra);
});

app.listen(process.env.PORT, () => {
  console.log(`listening to port ${process.env.PORT}`);
});
