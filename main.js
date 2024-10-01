let age;
let btnSubmit = document.querySelector('#btn');
let text = document.querySelector('#age');
let input = document.querySelector('#textAge');

btnSubmit.addEventListener('click', function(){
    age = input.value 
    age = Number(age)

    if(age >= 100){
        text.textContent = `You are too old to enter this site`
    }
    else if(age == 0 ){
        text.textContent = `You were just born so you can not enter this site`
    }
    else if(age >= 18){
     text.textContent = `You are old enough to enter this site`
    }
    else if(age <= 0){
        text.textContent = `You can not be below 0`
    }
    else{
        text.textContent = `You must be 18+ to enter this site`
    }
})