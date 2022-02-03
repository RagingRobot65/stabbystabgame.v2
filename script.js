//console.log("Welcome to the Stab Zone!");

var enemyHealth = 270;
var playerHealth = 200;
var infoEl = document.getElementById("info");


/*
 Dodge
  var dodgeEl = document.getElementById("dodge");
  var dodging = function () {
    var dodgeChance = Math.floor(Math.random() * 10);
    if (dodgeChance > 2) {
      dodgeEl.textContent = "Hit!";
    } else {
      dodgeEl.textContent = "Miss!";
    }
  };
  dodgeEl.addEventListener("click", dodging);

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

  //Jump
  var jumpEl = document.getElementById("jump");
  var jumping = function () {
    var jumpChance = Math.floor(Math.random() * 10);
    if (jumpChance > 5) {
      jumpEl.textContent = "Hit!";
    } else {
      jumpEl.textContent = "Miss!";
    }
  };
 jumpEl.addEventListener("click", jumping);
*/

//stab
var stabEl = document.getElementById("stab");
var stabbing = function () {
    var stabChance = Math.floor(Math.random() * 10);
    if (stabChance > 5) {
      enemyHealth = enemyHealth - 75;
      if (enemyHealth <= 0) {
        var textEl = document.createElement("p");
        textEl.textContent = "Victory!";
        infoEl.appendChild(textEl);
        slashEl.remove();
        stabEl.remove();
        stunEl.remove();
        powerstrikeEl.remove();
        /*dodgeEl.remove();
        jumpEl.remove();
        blockEl.remove();
        deflectEl.remove(); */
        healthBars();
      } else {
        var textEl = document.createElement("p");
        textEl.textContent = "Enemy Hit! Their Health: " + enemyHealth;
        infoEl.appendChild(textEl);
        healthBars();
      }
    } else {
      var textEl = document.createElement("p");
      textEl.textContent =
        "Your poke did about as much damage as a toothpick.";
      infoEl.appendChild(textEl);
    }
  };
stabEl.addEventListener("click", stabbing);

//Slash
var slashEl = document.getElementById("slash");
var slashing = function () {
    var slashChance = Math.floor(Math.random() * 10);
    if (slashChance > 2) {
      enemyHealth = enemyHealth - 30;
      if (enemyHealth <= 0) {
        var textEl = document.createElement("p");
        textEl.textContent = "Victory!";
        infoEl.appendChild(textEl);
        slashEl.remove();
        stabEl.remove();
        stunEl.remove();
        powerstrikeEl.remove();
        /*dodgeEl.remove();
        jumpEl.remove();
        blockEl.remove();
        deflectEl.remove(); */
        healthBars();
      } else {
        var textEl = document.createElement("p");
        textEl.textContent = "Enemy Hit! Their Health: " + enemyHealth;
        infoEl.appendChild(textEl);
        healthBars();
      }
    } else {
      var textEl = document.createElement("p");
      textEl.textContent =
        "You're supposed to cut your enemy, not shake your sword around like it's a pool noodle!";
      infoEl.appendChild(textEl);
    };
  };
slashEl.addEventListener("click", slashing);

//Stun
var stunEl = document.getElementById("stun");
var stunDecider = function () {
  var stunChance = Math.floor(Math.random() * 10);
  if (stunChance > 2) {
    stunned();
  } else {
    stunMiss();
  };
};
var stunned = function () {
  var textEl = document.createElement("p");
    textEl.textContent =
      "You stunned your enemy!";
    infoEl.appendChild(textEl);      
    stunEl.remove();
    slashEl.removeEventListener("click", opponentMove);
    stabEl.removeEventListener("click", opponentMove);
    slashEl.addEventListener("click", stunned1);
    stabEl.addEventListener("click", stunned1);
};
var stunned1 = function () {
   var textEl = document.createElement("p");
       textEl.textContent =
        "Your enemy is still stunned!";
   infoEl.appendChild(textEl);
   slashEl.removeEventListener("click", stunned1);
   stabEl.removeEventListener("click", stunned1);
   slashEl.addEventListener("click", stunned2);
   stabEl.addEventListener("click", stunned2);
};
var stunned2 = function () {
   var textEl = document.createElement("p");
       textEl.textContent =
        "Your enemy is coming to!";
   infoEl.appendChild(textEl);
   slashEl.removeEventListener("click", stunned2);
   stabEl.removeEventListener("click", stunned2);
   slashEl.addEventListener("click", opponentMove);
   stabEl.addEventListener("click", opponentMove);
};
var stunMiss = function () {
  var textEl = document.createElement("p");
      textEl.textContent =
        "Dang, you really suck at bonking people.";
      infoEl.appendChild(textEl);
      stunEl.remove();
      chopping();
};
stunEl.addEventListener("click", stunDecider);
  
//Power Strike!
var powerstrikeEl = document.getElementById("powerstrike");
var powerstrikeing = function () {
  var powerstrikeChance = Math.floor(Math.random() * 10);
    if (powerstrikeChance > 7) {
      enemyHealth = enemyHealth - 150;
      if (enemyHealth <= 0) {
        var textEl = document.createElement("p");
        textEl.textContent = "Victory!";
        infoEl.appendChild(textEl);
        slashEl.remove();
        stabEl.remove();
        stunEl.remove();
        powerstrikeEl.remove();
        /*dodgeEl.remove();
        jumpEl.remove();
        blockEl.remove();
        deflectEl.remove(); */
        healthBars();
      } else {
        var textEl = document.createElement("p");
        textEl.textContent = "Enemy Hit! Their Health: " + enemyHealth;
        infoEl.appendChild(textEl);
        healthBars();
      };
    } else {
      var textEl = document.createElement("p");
      textEl.textContent =
        "You completely whiff your shot like an idiot.";
      infoEl.appendChild(textEl);
    };  
  };
powerstrikeEl.addEventListener("click", powerstrikeing);

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
};

//Opponent Attack
var opponentMiss = function () {
  var textEl = document.createElement("p");
      textEl.textContent =
        "It appears your foolish enemy is not capable of wielding the most simple of weapons.";
      infoEl.appendChild(textEl);
};

var chopping = function () {
  if (enemyHealth <= 0) {
  } else {
      playerHealth = playerHealth - 25;
      if (playerHealth <= 0) {
        var textEl = document.createElement("p");
        textEl.textContent = "You were fatally wounded! Defeat!";
        infoEl.appendChild(textEl);
        slashEl.remove();
        stabEl.remove();
        stunEl.remove();
        powerstrikeEl.remove();
        /*dodgeEl.remove();
        jumpEl.remove();
        blockEl.remove();
        deflectEl.remove();*/
        healthBars();
      } else {
        var textEl = document.createElement("p");
        textEl.textContent = "You're Hit! Your Health: " + playerHealth;
        infoEl.appendChild(textEl);
        healthBars();
      };
  };
};

var oppSlash = function () {
  var slashChance = Math.floor(Math.random() * 10);
    if (slashChance > 2) {
      playerHealth = playerHealth - 35;
      if (playerHealth <= 0) {
        var textEl = document.createElement("p");
        textEl.textContent = "You suck! Defeat!";
        infoEl.appendChild(textEl);
        slashEl.remove();
        stabEl.remove();
        stunEl.remove();
        powerstrikeEl.remove();
        /*dodgeEl.remove();
        jumpEl.remove();
        blockEl.remove();
        deflectEl.remove(); */
        healthBars();
      } else {
        var textEl = document.createElement("p");
        textEl.textContent = "You've been hit bad! Your Health: " + playerHealth;
        infoEl.appendChild(textEl);
        healthBars();
      }
    } else {
      var textEl = document.createElement("p");
      textEl.textContent =
        "Your enemy tried to take a page out of your book, and surpise, surprise, they failed.";
      infoEl.appendChild(textEl);
    };
};

//Opponent eventListeners
slashEl.addEventListener("click", opponentMove);
stabEl.addEventListener("click", opponentMove);
powerstrikeEl.addEventListener("click", opponentMove);

//Health Bars
var healthBars = function () {
  var enHpEl = document.getElementById("enHp");
  var pHpEl = document.getElementById("pHp");
  enHpEl.textContent = "Enemy Health: " + enemyHealth;
  pHpEl.textContent = "Your Health: " + playerHealth;
};
healthBars();

/* The code for one attack
var yEl = document.getElementById("y");
var ying = function() {
  var yChance = Math.floor(Math.random() * 10);
  if (yChance > x) {
    yEl.textContent = "Hit!";
  } else {
    yEl.textContent = "Miss!"; 
  };
};
yEl.addEventListener("click", ying); 
*/
