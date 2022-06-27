//Review Recipes

let contact_us = document.querySelector('div.contact-us');

let document_header = document.querySelector('head');

let fontawesome_link = `<!--Font Awesone Icons-->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>`;

document_header.insertAdjacentHTML('beforeend', fontawesome_link);

var review_system = `<table width = "fit-content" style="margin-left: auto; margin-right: auto;">
<tr>
    <td>
        <div class="recipe_review">
            <h2 style="
            font-size: 2.25rem;
            background-image: linear-gradient(315deg, #fffb00 40%, #ff00ff 74%);
            /*background: -webkit-linear-gradient(45deg, #09009f, #00ff95 80%);*/
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            text-align: center;"
            >Meet our Chef</h2>
            <table style="text-align: center; margin-left: auto; margin-right: auto;">
                <tr>
                    <td><img src="../../assets/chef/chef.png" height="150" width="120"></td>
                    <td>
                        <div class="ingredient-item" style="padding: 15px;">
                            <h3>Chef Gusteau</h3>
                            <p>Ratatoullie[2007 - present]</p>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
    </td>
    <td>
        <div class="recipe_review">
            <h1>Rate Our Recipe</h1>
            <div class="review">
                <div class="post">
                    <div class="text">Thanks for rating the recipe!</div>
                    <div class="edit">EDIT REVIEW</div>
                </div>
                <div class="star-widget">
                    <input type="radio" name="rate" id="rate-5">
                    <label for="rate-5" class="fas fa-star"></label>
                    <input type="radio" name="rate" id="rate-4">
                    <label for="rate-4" class="fas fa-star"></label>
                    <input type="radio" name="rate" id="rate-3">
                    <label for="rate-3" class="fas fa-star"></label>
                    <input type="radio" name="rate" id="rate-2">
                    <label for="rate-2" class="fas fa-star"></label>
                    <input type="radio" name="rate" id="rate-1">
                    <label for="rate-1" class="fas fa-star"></label>
                    <form action="#">
                    <header></header>
                    <div class="textarea">
                        <textarea cols="30" placeholder="Describe your Cooking experience"></textarea>
                    </div>
                    <div class="btn">
                        <button type="submit">Share</button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    </td>
</tr>
</table>`

contact_us.insertAdjacentHTML('beforebegin', review_system);

const btn = document.querySelector("button");
const post = document.querySelector(".post");
const widget = document.querySelector(".star-widget");
const editBtn = document.querySelector(".edit");
btn.onclick = ()=>{
            widget.style.display = "none";
            post.style.display = "block";
            editBtn.onclick = ()=>{
            widget.style.display = "block";
            post.style.display = "none";
}
    return false;
}

/*Dynamic ingredients*/

let p_loc = document.querySelector('.recipe_about').querySelectorAll('p')[3].insertAdjacentHTML('afterend', `<h2 style = "width: 500px; padding-left: 5px; padding-right: 5px;">Personalize Ingredients</h2><input id="n" min="1" onkeyup = "updateIngredients()" type = "number" placeholder = "Enter No of Serves" style = "height: 100%; width: fit-content; text-align: center; font-size: large; font-family: 'Poppins'; color: white; background-color: black; border: none; padding: 5px; border-radius: 25px;">`);

let number_of_serves = parseInt(document.querySelector('.recipe_about').querySelectorAll('p')[3].innerText);
let ingredient_list = document.querySelectorAll('.ingredient-item')

let original_list = [];

for(let i = 0; i < ingredient_list.length; i++)
{
    original_list.push(ingredient_list[i].querySelector('p').innerHTML);
}

function updateIngredients()
{
    for(let i = 0; i < ingredient_list.length; i++)
    {
        ingredient_list[i].querySelector('p').innerHTML = original_list[i];
    }
    let number_of_serves = parseInt(document.querySelector('.recipe_about').querySelectorAll('p')[3].innerText);

    let n = document.getElementById('n').value;

    let factor = n / number_of_serves;

    for(let i = 0; i < ingredient_list.length - 1; i++)
    {
        let original = (parseInt(original_list[i]));
        if(isNaN(original) == false && n != 0 && n != "")
        {
            let temp = ingredient_list[i].querySelector('p').innerHTML.split(' ');
            for(let i = 0; i < temp.length; i++)
            {
                if(isNaN(parseInt(temp[i])) == false){
                    temp[i] = parseFloat(temp[i]);
                    temp[i] = parseFloat(temp[i]*factor)
                    if(parseInt(temp[i]) != temp[i])
                    {
                        temp[i] = temp[i].toPrecision(2);
                    }
                }
            }
            ingredient_list[i].querySelector('p').innerHTML = temp.join(' ');
        }
    }
}

let recipe_card_outline = document.querySelector('.recipe_card_outline');

let name_of_recipe = recipe_card_outline.querySelector('h1').innerHTML;
let recipe_image = recipe_card_outline.querySelector('img');

recipe_card_outline.querySelector('a').insertAdjacentHTML('afterend', `<button class="btn-primary" type="button" onclick='print()' style="margin: 3px;">Print Recipe</button>`);