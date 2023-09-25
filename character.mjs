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

        return new Character(
            fullName = playerData[0].name + " the " + playerData[0].class,
            playerData[0].health,
            playerData[0].magic,
            playerData[0].stamina,
            potions

        )
    }

}


function drinkEmAll(bagOfPotions){

        

}