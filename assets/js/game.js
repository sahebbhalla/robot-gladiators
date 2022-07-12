var playerName = window.prompt("Enter the name of your Robot");
var playerHealth = 100;
var playerAttack = 10 ;

console.log (playerName,playerAttack,playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;
window.alert("Welcome to the Game");

var fight =function(){
   
    var flightSelection = window.prompt("Do you want to Fight or Skip")

    if (flightSelection==='FIGHT' || flightSelection==='fight'){
         enemyHealth = enemyHealth - playerAttack;
         playerHealth = playerHealth - enemyAttack;
    
         if (enemyHealth <= 0) {
              window.alert(enemyName + " has died!");
        } 
         else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }
        console.log(  playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
        } 
        else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
         }

      
        console.log( enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
         fight();
    }else if(flightSelection==='SKIP'|| flightSelection ==='SKIP'){
        window.alert("User selected to skip the game ");
    }
    else if(flightSelection==="QUIT" || flightSelection ==="quit"){
        window.alert("User Chose to quit!");
    }
    else{
        window.alert("Please Choose A valid option ");
        fight()
    }
   
}

fight();
