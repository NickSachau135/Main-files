let side = "";
let team = 0;

function StartGame() {
  document.getElementById("board").style.display = "flex";
}

function chooseTeam() {
  team = Math.ceil(Math.random() * 10);
  console.log(team);

  if(team % 2 == 0) {
    side = "black"
    console.log(`${side}`);
    console.log(`Your side is black`);
  }else if(team % 2 == 1) {
    side = "white"
    console.log(`${side}`);
    console.log(`Your side is white`);
  }
}

function singleplayer() {
  StartGame();
  chooseTeam();

  document.getElementById("buttonSingle").style.display = "none";
  document.getElementById("buttonDouble").style.display = "none";
  document.getElementById("title").innerHTML = "Single Player";

  if(side == "black") {
    document.getElementById("title").innerHTML = "You're Team Black";
  }else if(side == "white") {
    document.getElementById("title").innerHTML = "You're Team White";
  }
}

function multiplayer() {
  StartGame();
  document.getElementById("buttonSingle").style.display = "none";
  document.getElementById("buttonDouble").style.display = "none";
  document.getElementById("title").innerHTML = "2 Player";
}

// Make an item dragable

