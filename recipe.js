class Recipes{

    static getRecipe(foodValue){
        let fetchData = fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodValue}`)
        .then((res) => res.json())
        return fetchData
    }

}


export default Recipes