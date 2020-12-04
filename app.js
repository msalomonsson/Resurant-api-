import Ui from './Userinterface.js';
import Recipes from './recipe.js';


(function app(){

    const form = document.querySelector('.form').addEventListener('submit',render)


    function render(e){
        e.preventDefault()

        const inputValue = document.querySelector('.input').value;
    
        const recipe = Recipes.getRecipe(inputValue);
        recipe.then(data => {
            const recipeObj = data.meals[0];
            return recipeObj
        }).then((recipeObj) => {
            Ui.cardHtml(recipeObj);
            Ui.clearInput()
            document.querySelector('.showBtn').addEventListener('click',Ui.showIns)
        }).catch((err) => {
            console.log(err)
            alert('Something went wrong')
            Ui.clearInput()
        })
    
    
    }
    
}())