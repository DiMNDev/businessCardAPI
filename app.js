const URL =
  "https://iskarr.github.io/austindonovan.github.io/api/business.json";

let cards = document.querySelector("div.cards");
let para = document.createElement("p");
let descriptions;
fetch("descriptions.json")
  .then((response) => response.json())
  .then((data) => {
    descriptions = data;
    pullData();
    console.log(descriptions);
  });
// async function fetchDescriptions() {
//   try {
//     const response = await fetch("descriptions.json");
//     const data = await response.json();
//     descriptions = data;
//     console.log(descriptions);
//   } catch (err) {
//     console.error(err);
//   }
// }

const pullData = () => {
  fetch(URL)
    .then((response) => response.json())
    .then((jsObject) => {
      let business = jsObject.business;
      console.log(business);
      for (let i = 0; i < business.length; i++) {
        // console.log(business[i].name);
        // console.log(descriptions[i][business[i].name]);
        // You must include your javascript below to display the following information:
        // 1. business names, 2.business image,
        // 3. business locations, 4. business descriptions
        // Here is an example for the name to start you off.
        let customCard = document.createElement("section");
        customCard.innerHTML = `<div class="grid-cell">
<div class="card-wrapper">
  <div class="card">
    <div class="card-front">
    <img src="${business[i].imageurl}">
    
    </div>
    <div class="card-back">
    <h2>${business[i].name}</h2>
    <div class="address">${business[i].address}</div>
    <div class="description">${business[i].description}</div>
    </div>
  </div>
</div>
</div>`;
        document.querySelector("div.cards").appendChild(customCard);
      }
    });
};
