const ATTACK_VALUE = 10;
const STRONG_VALUE = 20;
const MONSTER_ATTACK = 14;
const HEAL_VALUE = 20;


const MODE_ATTACK = 'ATTACK'; // MODE_ATTACK = 0
const MODE_STRONG_ATTACK = 'STRONG_ATTACK'; //MODE_STRONG_ATTACK = 1

let extra_life = true;

//User input prompt determine max life
const userInputLife = prompt('enter max life for battle.', '100');
let chosenMaxLife = parseInt(userInputLife);

if (isNaN(userInputLife) || chosenMaxLife <= 0) {
    chosenMaxLife = 100;
}




let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);



//reset game function
function reset() {
    alert(`game is resetting`);
    currentMonsterHealth = chosenMaxLife;
    currentPlayerHealth = chosenMaxLife;

    resetGame(chosenMaxLife);
}







// //bonus life function//
function endRound() {
    const initialPlayerHealth = currentPlayerHealth;
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK);
    currentPlayerHealth -= playerDamage;

    //const initialPlayerHealth = currentPlayerHealth
    // const playerDamage = dealPlayerDamage(MONSTER_ATTACK);
    // currentPlayerHealth -= playerDamage;
  
    

    if (currentPlayerHealth <= 0 && extra_life === true) {
        extra_life = false;
        removeBonusLife();
        currentPlayerHealth = initialPlayerHealth;
        playerHealthBar.value = initialPlayerHealth;
        
        
        alert(`You would've been dead but bonus life saved you, health froze @ ${initialPlayerHealth}`);

    }  

        if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
            alert("you won");
            reset();
        } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {

            alert("you lost");
            reset();
        } else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
        
            alert('draw');
            reset();
        }
    
}


function playerAttack(mode) {
   
    let maxDamage;
    if (mode === MODE_ATTACK) {
        maxDamage = ATTACK_VALUE;
    } else if (mode === MODE_STRONG_ATTACK) {
        maxDamage = STRONG_VALUE;
    }

    const damage = dealMonsterDamage(maxDamage);
    currentMonsterHealth -= damage;
    
    endRound();
 
}

function attack() {
    playerAttack(MODE_ATTACK);
}

    // const damage = dealMonsterDamage(ATTACK_VALUE);
    // currentMonsterHealth -= damage;
    
    // const playerDamage = dealPlayerDamage(MONSTER_ATTACK);
    // currentPlayerHealth -= playerDamage;
    
    // if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    //     alert("you won");
    // } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    //     alert("you lost");
    // } else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
    //     alert('draw');
    // }



function strongAttack() {
    playerAttack(MODE_STRONG_ATTACK);
}
    //  damage = dealMonsterDamage(STRONG_VALUE)
    //  currentMonsterHealth -= damage;
    
    //  const playerDamage = dealPlayerDamage(MONSTER_ATTACK);
    //  currentPlayerHealth -= playerDamage;
    //  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    //     alert("you won");
    // } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    //     alert("you lost");
    // } else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
    //     alert('draw');
    // }


function heal() {
    let healthValue;
    if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
        
        healthValue = chosenMaxLife-currentPlayerHealth;
        
        currentPlayerHealth += healthValue;
        increasePlayerHealth(healthValue);
        alert(`you can only heal ${healthValue}`);
    
    } else {

       increasePlayerHealth(HEAL_VALUE);
    
        currentPlayerHealth += HEAL_VALUE;
        alert(`you were healed ${HEAL_VALUE}`)
    }
    playerDamage = dealPlayerDamage(MONSTER_ATTACK);
    currentPlayerHealth -=playerDamage;

    endRound();

}

// function log() {

// }




attackBtn.addEventListener('click', attack);
strongAttackBtn.addEventListener('click', strongAttack);
healBtn.addEventListener('click', heal);
logBtn.addEventListener('click', log);