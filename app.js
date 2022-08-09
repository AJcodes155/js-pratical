let number = document.getElementById('Num')
let dec = document.getElementById('Dec')
let res = document.getElementById('Res')
let inc = document.getElementById('Inc')
let body = document.body


function Decrease(){
    number.innerText--
    if(number.innerText < 0){
        body.style.backgroundColor = 'red'
    }
}

dec.addEventListener('click',Decrease)

function Reset(){
    number.innerText = 0
    if(number.innerText ==0){
        body.style.backgroundColor = 'yellow'
    }
}

res.addEventListener('click',Reset)


function Increase(){
    number.innerText++
    if(number.innerText > 0){
        body.style.backgroundColor = 'green'
    }
}

inc.addEventListener('click',Increase)
