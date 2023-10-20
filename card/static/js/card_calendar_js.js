const data = [document.getElementById('mo1'), document.getElementById('tu1'), document.getElementById('we1'), document.getElementById('th1'),
document.getElementById('fr1'), document.getElementById('sa1'), document.getElementById('su1'), document.getElementById('mo2'),
document.getElementById('tu2'), document.getElementById('we2'), document.getElementById('th2'), document.getElementById('fr2'),
document.getElementById('sa2'), document.getElementById('su2')]
let dataCon = 0
var calendarInput = document.getElementById("calendar_input")

data[0].addEventListener('click', function(){
    data[dataCon].classList.remove('check_week_day_num')
    data[0].classList.add('check_week_day_num')
    dataCon = 0
    calendarInput.value=data[0].textContent
})
data[1].addEventListener('click', function(){
    data[dataCon].classList.remove('check_week_day_num')
    data[1].classList.add('check_week_day_num')
    dataCon = 1
    calendarInput.value=data[1].textContent
})
data[2].addEventListener('click', function(){
    data[dataCon].classList.remove('check_week_day_num')
    data[2].classList.add('check_week_day_num')
    dataCon = 2
    calendarInput.value=data[2].textContent
})
data[3].addEventListener('click', function(){
    data[dataCon].classList.remove('check_week_day_num')
    data[3].classList.add('check_week_day_num')
    dataCon = 3
    calendarInput.value=data[3].textContent
})
data[4].addEventListener('click', function(){
    data[dataCon].classList.remove('check_week_day_num')
    data[4].classList.add('check_week_day_num')
    dataCon = 4
    calendarInput.value=data[4].textContent
})
data[5].addEventListener('click', function(){
    data[dataCon].classList.remove('check_week_day_num')
    data[5].classList.add('check_week_day_num')
    dataCon = 5
    calendarInput.value=data[5].textContent
})
data[6].addEventListener('click', function(){
    data[dataCon].classList.remove('check_week_day_num')
    data[6].classList.add('check_week_day_num')
    dataCon = 6
    calendarInput.value=data[6].textContent
})
data[7].addEventListener('click', function(){
    data[dataCon].classList.remove('check_week_day_num')
    data[7].classList.add('check_week_day_num')
    dataCon = 7
    calendarInput.value=data[7].textContent
})
data[8].addEventListener('click', function(){
    data[dataCon].classList.remove('check_week_day_num')
    data[8].classList.add('check_week_day_num')
    dataCon = 8
    calendarInput.value=data[8].textContent
})
data[9].addEventListener('click', function(){
    data[dataCon].classList.remove('check_week_day_num')
    data[9].classList.add('check_week_day_num')
    dataCon = 9
    calendarInput.value=data[9].textContent
})
data[10].addEventListener('click', function(){
    data[dataCon].classList.remove('check_week_day_num')
    data[10].classList.add('check_week_day_num')
    dataCon = 10
    calendarInput.value=data[10].textContent
})
data[11].addEventListener('click', function(){
    data[dataCon].classList.remove('check_week_day_num')
    data[11].classList.add('check_week_day_num')
    dataCon = 11
    calendarInput.value=data[11].textContent
})
data[12].addEventListener('click', function(){
    data[dataCon].classList.remove('check_week_day_num')
    data[12].classList.add('check_week_day_num')
    dataCon = 12
    calendarInput.value=data[12].textContent
})
data[13].addEventListener('click', function(){
    data[dataCon].classList.remove('check_week_day_num')
    data[13].classList.add('check_week_day_num')
    dataCon = 13
    calendarInput.value=data[13].textContent
})