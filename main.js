let icons = document.querySelectorAll(".score img");
let category = document.querySelectorAll(".score img + span");
let resultScore = document.querySelectorAll(".result-score");
let finalScore = document.querySelector(".final");
let scoresArray = [];

fetch("data.json")
  .then((response) => {
    let data = response.json();
    return data;
  })
  .then((data) => {
    //this is so much easier
    data.forEach((e, i) => {
      icons[i].src = e.icon;
      category[i].innerHTML = e.category;
      resultScore[i].innerHTML = e.score;
      scoresArray.push(e.score);
    });

    let average = scoresArray.reduce((x, y) => x + y) / scoresArray.length;
    finalScore.innerHTML = average.toFixed();
  });

// todo 1 - get language selector from page
// let LanguageSelector = document.getElementById("lang");

// todo 3-  declare the language variable
// let lang;

// todo 5-  get the element to change text
// let mainHead = document.getElementById("main-head");
// let great = document.querySelector(".great");
// let resultText = document.querySelector("#result-text");

// todo 7a- get the body to change dir
// let page = document.body;

// todo 6- set the language on page load
// window.onload = (e) => {
//   lang = LanguageSelector.value;
//   fetchPage(lang);
//   // setPageDir(lang);
// };

// todo 2- add event listener to get the chosen language
// LanguageSelector.addEventListener("change", (e) => {
// console.log(e.target.value);
// lang = e.target.value;
//   // fetchPage(lang);
//   // setPageDir(lang);
// });

// todo 4- function to get the right data upon the selected language
// const fetchPage = (lang) => {
//   fetch(`languages/${lang}.json`)
//     .then((response) => {
//       let data = response.json();
//       return data;
//     })
//     .then((data) => {
//       console.log(data);
//       // // set the translation to the elements
//       // // ! get them first
//       // mainHead.innerHTML = data.head;
//       // great.innerHTML = data.great;
//       // resultText.innerHTML = data.text;

//       // set the results
//       // //this is so much easier
//       // data.result.forEach((e, i) => {
//       //   icons[i].src = e.icon;
//       //   category[i].innerHTML = e.category;
//       //   resultScore[i].innerHTML = e.score;
//       //   scoresArray.push(e.score);
//       // });

//       // // calculating the langauge
//       // let average = scoresArray.reduce((x, y) => x + y) / scoresArray.length;
//       // finalScore.innerHTML = average.toFixed();
//     });
// };

// todo 7b- function to set the page dir upon the selected language
// const setPageDir = (lang) => {
//   lang === "ar"
//     ? page.setAttribute("dir", "rtl")
//     : page.setAttribute("dir", "ltr");
// };

// done el7
