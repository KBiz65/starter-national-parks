// console.log(document);
// const heading = document.querySelector("h1");
// console.log(heading);
// const value = document.querySelector(".value");
// console.log(value);
// const myButton = document.querySelector("button");
// console.log(myButton);
// const area = document.querySelector(".area-display");
// console.log(area);
// const statElement = document.querySelector(".stat > div");
// console.log(statElement);
// const hello = document.querySelector(".hello");
// console.log(hello);
// const allButtons = document.querySelectorAll("button");
// console.log(allButtons);
// const allDivsWithRatings = document.querySelectorAll("div .rating-display");
// for (let element of allDivsWithRatings.values()) {
//   console.log(element);
// }
// const allDivsWithAreas = document.querySelectorAll("div .area-display");
// for (let i = 0; i < allDivsWithAreas.length; i++) {
//   console.log(allDivsWithAreas[i]);
// }
const descriptions = document.querySelectorAll(".description-display");
for (let desc of descriptions.values()) {
  let content = desc.innerText;
  // console.log(content);
  if (content.length > 250) {
    content = content.slice(0, 250) + '<a href="#">...</a>';
  }
  desc.innerHTML = content;
  // console.log(content);
}

const allRatings = document.querySelectorAll(".rating-display .value");
// console.log("allRatings: ", allRatings);

// for (let rating of allRatings.values()) {
//   const parkRating = parseFloat(rating.innerText);
//   console.log(parkRating);
// }

for (let rating of allRatings) {
  const ratingValue = parseFloat(rating.innerText);
  // console.log(ratingValue);
  if (ratingValue > 4.7) {
    console.log(rating.style);
    rating.style.fontWeight = "bold";
  }
}

for (let rating of allRatings) {
  let ratingValue = parseFloat(rating.innerText);

  if (ratingValue > 4.7) {
    rating.classList.add("high-rating");
    rating.classList.remove("value");
  }
}

const parks = document.querySelectorAll(".park-display");
const numberParks = parks.length;
const newElement = document.createElement("div");

newElement.innerText = `${numberParks} exciting parks to visit`;
newElement.classList.add("header-statement");

const header = document.querySelector("header");

header.appendChild(newElement);

// const firstBtn = document.querySelector("button");
// firstBtn.addEventListener("click", (event) => {
//   console.log("You clicked the button", event);
//   console.log(event.target);
// });

const allBtns = document.querySelectorAll(".rate-button");

allBtns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const park = event.target.parentNode;
    park.style.backgroundColor = "#c8e6c9";
  });
});

const nameSorter = document.querySelector("#name-sorter");
nameSorter.addEventListener("click", (event) => {
  event.preventDefault();
  const main = document.querySelector("main");
  const parksList = document.querySelectorAll(".park-display");
  main.innerHTML = "";
  const parksArray = Array.from(parksList);

  parksArray.sort((parkA, parkB) => {
    const parkAName = parkA.querySelector("h2").innerText;
    const parkBName = parkB.querySelector("h2").innerText;
    if (parkAName < parkBName) {
      return -1;
    } else if (parkAName > parkBName) {
      return 1;
    } else {
      return 0;
    }
  });
  parksArray.forEach((park) => {
    main.appendChild(park);
  });
});

const ratingSorter = document.querySelector("#rating-sorter");
ratingSorter.addEventListener("click", (event) => {
  event.preventDefault();
  const main = document.querySelector("main");
  const parksList = document.querySelectorAll(".park-display");
  main.innerHTML = "";
  const parksArray = Array.from(parksList);

  parksArray.sort((parkA, parkB) => {
    const parkARating = parkA.querySelector(".rating-display > div");
    const parkBRating = parkB.querySelector(".rating-display > div");

    if (parseFloat(parkARating.innerText) < parseFloat(parkBRating.innerText)) {
      return -1;
    } else if (
      parseFloat(parkARating.innerText) > parseFloat(parkBRating.innerText)
    ) {
      return 1;
    } else {
      return 0;
    }
  });
  parksArray.forEach((park) => {
    main.appendChild(park);
  });
});
