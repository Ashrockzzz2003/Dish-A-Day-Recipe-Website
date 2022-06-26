let recipe_list = document.getElementsByClassName('recipe-list');

let cusine_list = []

let cusines = document.querySelector(".container").querySelectorAll('h2');

for(let i = 0; i < cusines.length; i++)
{
    cusine_list.push(cusines[i].innerHTML);
    //console.log(cusines[i].innerHTML);
}

//console.log(cusine_list);

let search_index = [];

for(let i = 0; i < recipe_list.length; i++)
{
    //console.log(cusine_list[i]);
    let recipe_card = recipe_list[i].getElementsByClassName('recipe-card');
    let recipe_names = [];
    for(let j = 0; j < recipe_card.length; j++)
    {
        recipe_names.push(recipe_card[j].querySelector('h4').innerHTML)
    }
    //console.log(recipe_names);
    search_index.push(recipe_names);
    //console.log(recipe_list[i].querySelector('.recipe-card'));
}

/*
for(let i = 0; i < search_index.length; i++)
{
    console.log(cusine_list[i]);
    console.log(search_index[i]);
}*/

var seen = [];
var seen_recipes = [];

function searchList()
{
    let key = document.querySelector('input');
    //console.log(key.value);

    let items = document.querySelector('div.variable_zone');

    let results = document.querySelectorAll('.search_result');

    let results_type_2 = document.querySelectorAll('.search_result_recipe');
    
    if(key.value != "")
    {
        items.id = "hide";
    }

    else
    {
        seen = [];
        seen_recipes = [];
        for(let i = 0; i < results.length; i++)
        {
            results[i].id = "hide";
        }
        for(let i = 0; i < results_type_2.length; i++)
        {
            results_type_2[i].id = "hide";
            results_type_2[i].innerHTML = "";
        }
        items.id = "show";
    }

    for(let i = 0; i < cusine_list.length; i++)
    {
        if(key.value != "")
        {
            let recipes = search_index[i];
            let page_recipes = [];

            for(let k = 0; k < recipe_list.length; k++)
            {
                let recipe_cards_list = recipe_list[i].getElementsByClassName('recipe-card');
                for(let m = 0; m < recipe_cards_list.length; m++)
                {
                    page_recipes.push(`<div class = "recipe-card">${recipe_cards_list[m].innerHTML}</div>`);
                }
            }

            if(seen_recipes.length == 0 && seen.length == 0)
            {
                document.querySelector('#search_recipes').insertAdjacentHTML('afterend', `<div class="search_result_recipe" style = "display: block;">` + `<h2>Related Recipe Books</h2>` + `</div>`);
            }

            for(let j = 0; j < recipes.length; j++)
            {
                if((recipes[j].toLowerCase().includes(key.value.toLowerCase())) && !(seen_recipes.includes(recipes[j])))
                {
                    if(seen_recipes.length != 0)
                    {
                        document.querySelector('.search_result_recipe').insertAdjacentHTML('afterend', `<div class="search_result_recipe">` + `<div class = "recipe_list">` + `${page_recipes[j]}` + `</div>` + `</div>`);
                        //console.log(recipes[j]);
                    }
                    else
                    {
                        document.querySelector('.search_result_recipe').insertAdjacentHTML('afterend',  `<div class="search_result_recipe">` + `<div class = "recipe_list">` + `${page_recipes[j]}` + `</div>` + `</div>`);
                        //console.log(recipes[j]);
                    }
                    seen_recipes.push(recipes[j]);
                }
            }
        }
        if(key.value != "" && (cusine_list[i].toLowerCase()).includes(key.value) && !(seen.includes(cusine_list[i])) && seen_recipes.length > 0)
        {
            if(seen.length != 0)
            {
                document.querySelector('.search_result').insertAdjacentHTML('afterend', `<div class="search_result">` + `<h2>${cusine_list[i]}</h2>` +  `${recipe_list[i].innerHTML}` + `</div>`);
            }
            else
            {
                document.querySelector('#search_recipes').insertAdjacentHTML('afterend', `<div class="search_result">` + `<h2>${cusine_list[i]}</h2>` +  `${recipe_list[i].innerHTML}` + `</div>`);
            }
            seen.push(cusine_list[i]);
        }
        else if(key.value == "all")
        {
            items.id = "show";
        }
    }
}