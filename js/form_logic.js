let count = 1;

function addIngredient(){
    count += 1;
    html = `<input type="text" class="new_ingredient_${count}" id="ingredient_${count}" style="margin-top: 10px;" placeholder="Enter Ingredient ${count}">`
    var input_group = document.getElementById('ingredients');
    input_group.innerHTML += html;
}

function removeIngredient(){
    let latestIngredient = document.querySelector( `.new_ingredient_${count}`);
    latestIngredient.remove();
    count -= 1;
}

function validateAndSubmit(){
    let flag = 1;
    let array_of_inputs = document.querySelectorAll('input');
    for(let i = 0; i < array_of_inputs.length; i++){
       if(array_of_inputs[i].type == 'text'){
        if(array_of_inputs[i].value == ""){
            array_of_inputs[i].setCustomValidity("Please Fill Out this Field!!");
            flag = 0;
        }
       }
    }

    if(flag == 1){
        open('on_submit.html');
    }
    else{
        alert("Please Fill All Fields!");
    }
}