import axios from 'axios';

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

// const myProfile = axios.get("https://api.github.com/users/Vehmeyer");
// console.log(myProfile);

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

// const followersArray = [tetondan, dustinmyers, justsml, luishrd, bigknell];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/

const cards = document.querySelector(".cards");

function cardMaker({ data_avatar, name, login, location, html_url, followers, following, bio}) {
  const divCard = document.createElement("div");
  const image = document.createElement("img");
  const cardInfo = document.createElement("div");
  const nameReal = document.createElement("h3");
  const userName = document.createElement("p");
  const locationReal = document.createElement("p");
  const profile = document.createElement("p");
  const profileLink = document.createElement("a");
  const followersReal = document.createElement("p");
  const followingReal = document.createElement("p");
  const bioReal = document.createElement("p");

  divCard.classList.add("card");
  cardInfo.classList.add("card-info");
  nameReal.classList.add("name");
  userName.classList.add("username");

  divCard.appendChild(image);
  divCard.appendChild(cardInfo);
  cardInfo.appendChild(nameReal);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(locationReal);
  cardInfo.appendChild(profile);
  cardInfo.appendChild(followersReal);
  cardInfo.appendChild(followingReal);
  cardInfo.appendChild(bioReal);
  profile.appendChild(profileLink);

  // VERIFY DATA YOU'RE PASSING IN
  image.setAttribute("src", `${data_avatar}`); 
  nameReal.textContent = `${name}`;
  userName.textContent = `${login}`;
  locationReal.textContent = `${location}`;
  profileLink.setAttribute("href", `${html_url}`);
  followersReal.textContent = `${followers}`;
  followingReal.textContent = `${following}`;
  bioReal.textContent = `${bio}`;

  return cardMaker;

 } 

 axios
  .get("https://api.github.com/users/Vehmeyer")
  //   const myProfile = axios.get("https://api.github.com/users/Vehmeyer");
  //   console.log(myProfile);
  .then((res) => {
    // DO YOU NEED TO INCLUDE .MESSAGE?
    const user = res.data.message;
    cards.appendChild(user);
  })
  .catch((arr) => {
    console.log("EXPERIENCING ISSUES");
  });





  // const followersArray = [tetondan, dustinmyers, justsml, luishrd, bigknell];
