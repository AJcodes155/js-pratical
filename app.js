let number = document.getElementById('Num')
let dec = document.getElementById('Dec')
let res = document.getElementById('Res')
let inc = document.getElementById('Inc')


function Decrease(){
    number.innerText--
}

dec.addEventListener('click',Decrease)

function Reset(){
    number.innerText = 0
}

res.addEventListener('click',Reset)


function Increase(){
    number.innerText++
}

inc.addEventListener('click',Increase)
