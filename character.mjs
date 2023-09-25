export { Character }
class Character {

    constructor(fullName, health, magic, stamina, potions){
        this.fullName = fullName,
        this.health = health,
        this.magic = magic,
        this.stamina = stamina,
        this.potions = potions
    }   


     from(playerData, potions){
        const fullName = playerData.players[0].name + " the " + playerData.players[0].class;
   

        return new Character(
            fullName,
            playerData.players[0].health,
            playerData.players[0].magick,
            playerData.players[0].stamina,
            potions
        )
    }

}


function drinkEmAll(bagOfPotions){

        

}