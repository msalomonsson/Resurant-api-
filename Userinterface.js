

class Ui{
    
    static cardHtml(recipeObj){
        const card = document.querySelector('.card')
        
        const array = Object.entries(recipeObj)
        
        const dataStructre = [];
        for (let i = 0; i < array.length; i++) {
            if(array[i][0].includes('strIngredient')){
                if(array[i][1] != '' ){
                    dataStructre.push(array[i])
                }
            }
        }
       
       const dataMesu = [];
       for(let i = 0; i < array.length; i++){
         if(array[i][0].includes('strMeasure')){
            if(array[i][1] != ''){
                dataMesu.push(array[i])
            }
        }
       }

          
        card.innerHTML = `
        <h5 class="card-header text-center">${recipeObj.strMeal}</h5>
          <div class="card-body d-flex flex-column text-center ">
            <h5 class="card-title">${recipeObj.strArea}</h5>
            <picture>
                <img src="${recipeObj.strMealThumb}" height="150px" class="rounded" >
            </picture>
            <p class="card-text"></p>
            <a href="#" class="btn btn-primary showBtn">Show Instructions</a>
          </div>
          <div class="show">
            <div class="instructions pl-5 pr-1">
                <h5>Instructions</h5>
                <p>
                ${recipeObj.strInstructions}
                </p>
            </div>
            <div class="ingredients pl-4" >
                <h5>Ingredients</h5>
                <ul class="list">
                    <li>${dataStructre[2][1]}</li>
                </ul>
            </div>  
          </div>
        `;

        for(let i = 0; i < dataStructre.length; i++){
            const list = document.querySelector('.list')
            list.innerHTML += `<li>${dataStructre[i][1]}: ${dataMesu[i][1]}</li>`
            
        }

    }
    
  

    static clearInput(){
        const input = document.querySelector('.input')
        input.value = '';
    }

    static showIns(e){
        console.log('working')
        document.querySelector('.show').style.display = "flex";
        document.querySelector('.showBtn').style.display = "none";
    }
}


export default Ui

