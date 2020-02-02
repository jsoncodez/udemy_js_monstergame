const ATTACK_VALUE = 10;
const STRONG_VALUE = 20;
const MONSTER_ATTACK = 14;
const HEAL_VALUE = 20;
let extra_life = true;

let chosenMaxLife = 100;

let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;


adjustHealthBars(chosenMaxLife);


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
        } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {

            alert("you lost");
        } else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
        
            alert('draw');
        }
    }


function playerAttack(mode) {
   
    let maxDamage;
    if (mode === 'ATTACK') {
        maxDamage = ATTACK_VALUE;
    } else if (mode === 'STRONG_ATTACK') {
        maxDamage = STRONG_VALUE;
    }

    const damage = dealMonsterDamage(maxDamage);
    currentMonsterHealth -= damage;
    
    endRound();
 
}

function attack() {
    playerAttack('ATTACK');
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
    playerAttack('STRONG_ATTACK');
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