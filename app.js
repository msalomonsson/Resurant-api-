
class Recipes{

    static getRecipe(foodValue){
        let fetchData = fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodValue}`)
        .then((res) => res.json())
        return fetchData
    }

}

class Ui{
    
    static cardHtml(recipeObj){
        const card = document.querySelector('.card')
        

        var array = Object.entries(recipeObj)
        console.log(array)
       
        card.innerHTML = `
        <h5 class="card-header text-center">${recipeObj.strMeal}</h5>
          <div class="card-body d-flex flex-column text-center ">
            <h5 class="card-title">${recipeObj.strArea}</h5>
            <picture>
                <img src="${recipeObj.strMealThumb}" height="120px" class="rounded" >
            </picture>
            <p class="card-text"></p>
            <a href="#" class="btn btn-primary showBtn">Show Instructions</a>
          </div>
          <div class="show d-flex">
            <div class="instructions pl-5 pr-5">
                <h5>Instructions</h5>
                <p>
                ${recipeObj.strInstructions}
                </p>
            </div>
            <div class="ingredients mr-1" >
                <ul>
                    <li>${recipeObj.strIngredient1} ${recipeObj.strMeasure1}</li>
                    <li>${recipeObj.strIngredient2} ${recipeObj.strMeasure2}</li>
                    <li>${recipeObj.strIngredient3} ${recipeObj.strMeasure3}</li>
                    <li>${recipeObj.strIngredient4} ${recipeObj.strMeasure4}</li>
                    <li>${recipeObj.strIngredient5} ${recipeObj.strMeasure5}</li>
                    <li>${recipeObj.strIngredient6} ${recipeObj.strMeasure6}</li>
                    <li>${recipeObj.strIngredient7} ${recipeObj.strMeasure7}</li>
                    <li>${recipeObj.strIngredient8} ${recipeObj.strMeasure8}</li>
                    <li>${recipeObj.strIngredient9} ${recipeObj.strMeasure9}</li>
                    <li>${recipeObj.strIngredient10} ${recipeObj.strMeasure10}</li>
                    <li>${recipeObj.strIngredient11} ${recipeObj.strMeasure11}</li>
        
                </ul>
            </div>  
          </div>
        `
    }

}

function render(e){
    e.preventDefault()
    const inputValue = document.querySelector('.input').value;


    const recipe = Recipes.getRecipe(inputValue);
    recipe.then(data => {
        const recipeObj = data.meals[0];
        return recipeObj
    }).then((recipeObj) => {
        Ui.cardHtml(recipeObj);
    }).catch(() => {
        alert("Misspelled input")
    })


}



const form = document.querySelector('.form').addEventListener('submit',render)
