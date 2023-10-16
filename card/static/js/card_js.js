var typeIndividual = document.getElementById('individual')
var typeFamily = document.getElementById('Family')
let views = true

document.querySelector('#admin').onclick = function(){
    window.location.replace('http://127.0.0.1:8000/admin/')
    console.log('hello')
}

typeIndividual.addEventListener('click', function(){
    typeFamily.classList.remove('check_type_therapy')
    typeIndividual.classList.add('check_type_therapy')
    views = true
})

typeFamily.addEventListener('click', function(){
    typeIndividual.classList.remove('check_type_therapy')
    typeFamily.classList.add('check_type_therapy')
    views = false
})