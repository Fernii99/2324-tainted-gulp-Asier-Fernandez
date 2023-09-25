import { Ingredients} from './ingredients.mjs'
import { Cauldron } from './cauldron.mjs'
import { getCharacterData, getData } from './service.mjs'
import { PotionBag } from './potionBag.mjs'
import { Character,  } from './character.mjs'
 
const execute = async () => {

    const data = await getData();
    const characterData = await getCharacterData();
    const ingredients = Ingredients.load(data);
    const cauldron = new Cauldron(ingredients);

    const potionBag = new PotionBag;
    const listOfPotions = potionBag.createPotions(characterData.players[0].pouch_aged, cauldron);
    showPotions(listOfPotions);
    const character = new Character;
    const myPlayer = character.from(characterData,listOfPotions);



    showCharacter(myPlayer);

    //myPlayer.drinkEmAll(listOfPotions);
    console.log(JSON.stringify(listOfPotions));

}

execute()


const showPotions = (listOfPotions) => {
    console.log("LIST OF THE POTIONS CREATED :");
    console.log(listOfPotions );
    console.log(" \n \n \n")

}





 const showCharacter = (character) => {
    
   console.log(character.fullName);
   console.log("----------------------------");
   console.log("Health: " + character.health);
   console.log("Magic: " + character.magick);
   console.log("Stamina: " + character.stamina);

   const listOfPotions = character.potions.listOfPotions.map(potion => potion.name);

    for (let p = 0; p < listOfPotions.length; p++){
        console.log("Potion " + (p+1)  + ": " + listOfPotions[p]);
    }
}

