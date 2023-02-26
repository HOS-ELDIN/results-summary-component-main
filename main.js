let icons = document.querySelectorAll(".score img");
let category = document.querySelectorAll(".score img + span");
let resultScore = document.querySelectorAll(".result-score");
let finalScore = document.querySelector(".final")
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
      scoresArray.push(e.score)
		});

    let average = scoresArray.reduce((x,y)=> x + y)/scoresArray.length
    finalScore.innerHTML=average.toFixed()

	});

  // done el7