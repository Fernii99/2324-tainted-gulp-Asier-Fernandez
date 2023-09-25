
const getData = async () => {
    try{
        const data = await fetch('https://raw.githubusercontent.com/zsiciarz/skyrim-alchemy-toolbox/master/data/ingredients.json');
        return data.json();
    }
    catch (error){
        return error;
    }

}




const getCharacterData = async () => {
    try{
        const data = await fetch('https://gist.githubusercontent.com/oscar1771/3f27e083e980d9d8357294c2d7387fc0/raw/0296abf13d206454d18f88d8283c114be8d96d2e/joseph.json');
        return data.json();
    }
    catch (error){
        return error;
    }

}



export { getData, getCharacterData }