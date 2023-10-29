const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
const days = [31, 0, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
const year = 2023
let month = 'Октябрь'
let day = 29
let arr = []

if ((year % 4 == 0) && (year % 100 != 0)){
    days[1] = 29
} else{ 
    days[1] = 28
}

let countDay = 0;
let firstMonth = ''
let lastMonth = ''
let lastDay = 0
for (let i = 0; i < 12; i++){
    if (months[i] == month){
        firstMonth = i
        for (let j = day; j < days[i]+1; j++){
            if (countDay < 14){
                arr.push(j)
                //console.log(j)
                countDay++
            }
        }
        for (let j = 1; j < days[i+1]+1; j++){
            if (countDay != 14){
                lastMonth = firstMonth+1
                arr.push(j)
                //console.log(j)
                lastDay = j
                countDay++
            }
        }
    }
}
let datePicker = `${day} ${months[firstMonth]} - ${lastDay} ${months[lastMonth]}`
document.getElementById('date_picker').textContent = datePicker
console.log(datePicker)
for (let i = 0; i < 14; i++){
    console.log(arr[i])
    document.getElementById(String(i)).textContent = arr[i]
}


const data = [document.getElementById('0'), document.getElementById('1'), document.getElementById('2'), document.getElementById('3'),
document.getElementById('4'), document.getElementById('5'), document.getElementById('6'), document.getElementById('7'),
document.getElementById('8'), document.getElementById('9'), document.getElementById('10'), document.getElementById('11'),
document.getElementById('12'), document.getElementById('13')]
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