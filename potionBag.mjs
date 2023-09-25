export { PotionBag } 


class PotionBag{

    constructor (listOfPotions){
        this.listOfPotions = listOfPotions
    }

    createPotions(ingredients, cauldron){

        const potionBag = [];

        for(let i = 0; i <= ingredients.length; i++){
            for( let j = i+1; j < ingredients.length; j++){
                potionBag.push(cauldron.createPotion(ingredients[i], ingredients[j]));
            }
        }

        return new PotionBag(potionBag);
        

    }

}