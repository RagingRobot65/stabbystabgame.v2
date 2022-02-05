console.log("Welcome to the Stab Zone!");

//Health & Damage Vars
var enemyHealth = 270;
var playerHealth = 200;
var enDamage = 0;
var vicEl = false;

//Element Vars
var infoEl = document.getElementById("info");
var buttonEls = document.getElementsByTagName("button");
var reactionEls = document.getElementsByClassName("reaction");
var actionEls = document.getElementsByClassName("action");
var enHpEl = document.getElementById("enHp");
var pHpEl = document.getElementById("pHp");

//Button Vars
var stabEl = document.getElementById("stab");
var slashEl = document.getElementById("slash");
var stunEl = document.getElementById("stun");
var powerstrikeEl = document.getElementById("powerstrike");
var dodgeEl = document.getElementById("dodge");
var jumpEl = document.getElementById("jump");

//Action & Reaction
var playerMove = function () {
  for (var i = 0; i < actionEls.length; i++) {
    actionEls[i].hidden = false;
  }
  for (var i = 0; i < reactionEls.length; i++) {
    reactionEls[i].hidden = true;
  }
};
playerMove();
var playerReaction = function () {
  for (var i = 0; i < actionEls.length; i++) {
    actionEls[i].hidden = true;
  }
  for (var i = 0; i < reactionEls.length; i++) {
    reactionEls[i].hidden = false;
  }
};

//Action

//Stab
var stabbing = function () {
  var stabChance = Math.floor(Math.random() * 10);
  if (stabChance > 5) {
    enemyHealth = enemyHealth - 75;
    splashHit();
  } else {
    actionNo();
  }
};

//Slash
var slashing = function () {
  var slashChance = Math.floor(Math.random() * 10);
  if (slashChance > 2) {
    enemyHealth = enemyHealth - 30;
    splashHit();
  } else {
    actionNo();
  }
};

//Stun
var stunDecider = function () {
  var stunChance = Math.floor(Math.random() * 10);
  if (stunChance > 2) {
    stunned();
  } else {
    stunMiss();
  }
};
var stunned = function () {
  var textEl = document.createElement("p");
  textEl.textContent = "You stunned your enemy!";
  infoEl.appendChild(textEl);
  stunEl.remove();
  slashEl.removeEventListener("click", opponentMove);
  stabEl.removeEventListener("click", opponentMove);
  powerstrikeEl.removeEventListener("click", opponentMove);
  slashEl.addEventListener("click", stunned1);
  stabEl.addEventListener("click", stunned1);
  powerstrikeEl.addEventListener("click", stunned1);
};
var stunned1 = function () {
  var textEl = document.createElement("p");
  textEl.textContent = "Your enemy is still stunned!";
  infoEl.appendChild(textEl);
  slashEl.removeEventListener("click", stunned1);
  stabEl.removeEventListener("click", stunned1);
  powerstrikeEl.removeEventListener("click", stunned1);
  slashEl.addEventListener("click", stunned2);
  stabEl.addEventListener("click", stunned2);
  powerstrikeEl.addEventListener("click", stunned2);
};
var stunned2 = function () {
  var textEl = document.createElement("p");
  textEl.textContent = "Your enemy is coming to!";
  infoEl.appendChild(textEl);
  slashEl.removeEventListener("click", stunned2);
  stabEl.removeEventListener("click", stunned2);
  powerstrikeEl.removeEventListener("click", stunned2);
  slashEl.addEventListener("click", opponentMove);
  stabEl.addEventListener("click", opponentMove);
  powerstrikeEl.addEventListener("click", opponentMove);
};
var stunMiss = function () {
  var textEl = document.createElement("p");
  textEl.textContent = "Dang, you really suck at bonking people.";
  infoEl.appendChild(textEl);
  stunEl.remove();
  chopping();
};

//Power Strike!
var powerstrikeing = function () {
  var powerstrikeChance = Math.floor(Math.random() * 10);
  if (powerstrikeChance > 7) {
    enemyHealth = enemyHealth - 150;
    splashHit();
  } else {
    actionNo();
  }
};

//Reaction

//Dodge
var dodging = function () {
  var dodgeChance = Math.floor(Math.random() * 10);
  if (dodgeChance > 4) {
    playerHealth = playerHealth + 5;
    reactionYes();
  } else {
    reactionNo();
  }
};

/*
  //Block
  var blockEl = document.getElementById("block");
  var blocking = function () {
    var blockChance = Math.floor(Math.random() * 10);
    if (blockChance >= 0) {
      blockEl.textContent = "Hit!";
    } else {
      blockEl.textContent = "Miss!";
    }
  };
  blockEl.addEventListener("click", blocking);

  //Deflect
  var deflectEl = document.getElementById("deflect");
  var deflecting = function () {
    var deflectCount = 2;
  };
  deflectEl.addEventListener("click", deflecting);
*/

//Jump
var jumping = function () {
  var jumpChance = Math.floor(Math.random() * 10);
  if (jumpChance > 6) {
    playerHealth = playerHealth + 15;
    reactionYes();
  } else {
    reactionNo();
  }
};

//End Game
var removeButtons = function () {
  slashEl.remove();
  stabEl.remove();
  stunEl.remove();
  powerstrikeEl.remove();
  dodgeEl.remove();
  jumpEl.remove();
};
var checkHealth = function () {
  if (playerHealth <= 0) {
    defeat();
  }
  if (enemyHealth <= 0) {
    victory();
  }
};
var victory = function () {
  var textEl = document.createElement("p");
  textEl.textContent = "Victory!";
  infoEl.appendChild(textEl);
  removeButtons();
  opponentMiss.remove();
  oppSlash.remove();
  chopping.remove();
};
var defeat = function () {
  var textEl = document.createElement("p");
  textEl.textContent = "You were fatally wounded! Defeat!";
  infoEl.appendChild(textEl);
  removeButtons();
};

//Splash Text
var splashHit = function () {
  textEl = document.createElement("p");
  textEl.textContent = "Enemy Hit! Their Health: " + enemyHealth;
  infoEl.appendChild(textEl);
};
var actionNo = function () {
  var splashChance = Math.floor(Math.random() * 10);
  if (splashChance > 4) {
    textEl = document.createElement("p");
    textEl.textContent = "Your poke did about as much damage as a toothpick.";
    infoEl.appendChild(textEl);
  } else {
    textEl = document.createElement("p");
    textEl.textContent =
      "You're supposed to cut your enemy, not shake your sword around like it's a pool noodle!";
    infoEl.appendChild(textEl);
  }
};
var reactionYes = function () {
  textEl = document.createElement("p");
  textEl.textContent = "Dodge Success! Your Health: " + playerHealth;
  infoEl.appendChild(textEl);
};
var reactionNo = function () {
  textEl = document.createElement("p");
  textEl.textContent = "You fail in avoiding your opponent's blade.";
  infoEl.appendChild(textEl);
};
var enSplashHit = function () {
  textEl = document.createElement("p");
  textEl.textContent = "You're Hit! Your Health: " + playerHealth;
  infoEl.appendChild(textEl);
};

//Opponent
var opponentMove = function () {
  var opponentAttackChoice = Math.floor(Math.random() * 10);
  if (opponentAttackChoice > 4) {
    chopping();
  } else if (opponentAttackChoice > 2) {
    oppSlash();
  } else {
    opponentMiss();
  }
  checkHealth();
};

//Opponent Attack
var opponentMiss = function () {
  if (enemyHealth > 0) {
    var textEl = document.createElement("p");
    textEl.textContent =
      "It appears your foolish enemy is not capable of wielding the most simple of weapons.";
    infoEl.appendChild(textEl);
  }
};
var chopping = function () {
  enDamage = 25;
  playerHealth = playerHealth - enDamage;
  enSplashHit();
  playerReaction();
};
var oppSlash = function(){
  var slashChance = Math.floor(Math.random() * 10);
  if (slashChance > 2) {
    enDamage = 35;
    playerHealth = playerHealth - enDamage;
    enSplashHit();
    playerReaction();
  } else {
    opponentMiss();
  }
}

//Player eventListeners
dodgeEl.addEventListener("click", dodging);
powerstrikeEl.addEventListener("click", powerstrikeing);
stunEl.addEventListener("click", stunDecider);
slashEl.addEventListener("click", slashing);
stabEl.addEventListener("click", stabbing);
jumpEl.addEventListener("click", jumping);

//Opponent eventListeners
slashEl.addEventListener("click", opponentMove);
stabEl.addEventListener("click", opponentMove);
powerstrikeEl.addEventListener("click", opponentMove);
dodgeEl.addEventListener("click", playerMove);
jumpEl.addEventListener("click", playerMove);
