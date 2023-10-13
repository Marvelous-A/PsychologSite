var typeIndividual = document.getElementById('individual')
var typeFamily = document.getElementById('Family')

document.querySelector('#admin').onclick = function(){
    window.location.replace('http://127.0.0.1:8000/admin/')
}

typeIndividual.addEventListener('click', function(){
    typeFamily.classList.remove('check_type_therapy')
    typeIndividual.classList.add('check_type_therapy')
})

typeFamily.addEventListener('click', function(){
    typeIndividual.classList.remove('check_type_therapy')
    typeFamily.classList.add('check_type_therapy')
})

document.querySelector('.week_day_num').addEventListener('mouseenter', function(){
    alert('ojsdfij')
})

// document.querySelector('#price').onclick = function(){
//     window.location.replace({% url 'add_order' %})
// }