const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
const week =[['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'], ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'], ['ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС', 'ПН'],
            ['СР', 'ЧТ', 'ПТ', 'СБ', 'ВС', 'ПН', 'ВТ'], ['ЧТ', 'ПТ', 'СБ', 'ВС', 'ПН', 'ВТ', 'СР'],
            ['ПТ', 'СБ', 'ВС', 'ПН', 'ВТ', 'СР', 'ЧТ'], ['СБ', 'ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ']]
let days = [31, 0, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
currentDate = new Date()
let day = currentDate.getDate()
const year = currentDate.getFullYear()
let month = currentDate.getMonth()
let weekArr = week[currentDate.getDay()]
for (let i = 0; i < 7; i++){                         // Вывод дней недели
    document.getElementById(String(i+20)).textContent = weekArr[i]
}
let countclick = 0               // Счётчик прерхода по неделям

if ((year % 4 == 0) && (year % 100 != 0)){ // Проверка на високосный год
    days[1] = 29
} else {
    days[1] = 28
}

monthGet(day, month)

function monthGet(day, month){
    let arr = []
    let countDays = 0;
    for (let i = day; i <= day+13; i++){  // В массив добовляются дни от текущего до двух недель вперёд при том, что в месяце будет хватать дней
        if (i <= days[month]){
            arr.push(i)
            countDays++
        }
    }
    if (countDays < 14){ // Если дней месяце не хватило
        month++          // Переход на следующий месяц
        for (let i = 1; i <= (14 - countDays); i++){ // В массив добовляются дни от 1-ого числа нового месяца до оставшихся дней
            arr.push(i)
        }
        if (months[month] == undefined){ // проверка на Январь / Вывод с какого по какое число показывает календарь
            let datePicker = `${arr[0]} ${months[month-1]} - ${arr[arr.length - 1]} ${months[0]}`
            document.getElementById('date_picker').textContent = datePicker
            for (let i = 0; i < 14; i++){
                document.getElementById(String(i)).textContent = arr[i]
            }
        } else {
            let datePicker = `${arr[0]} ${months[month-1]} - ${arr[arr.length - 1]} ${months[month]}`
            document.getElementById('date_picker').textContent = datePicker
            for (let i = 0; i < 14; i++){
                document.getElementById(String(i)).textContent = arr[i]
            }
        }
    }else{
        let datePicker = `${arr[0]} ${months[month]} - ${arr[arr.length - 1]} ${months[month]}`
        document.getElementById('date_picker').textContent = datePicker
        for (let i = 0; i < 14; i++){
            document.getElementById(String(i)).textContent = arr[i]
        }
    }
}

document.getElementById('button_date_right').onclick = function(){ // Переход на следующие две недели
    if (countclick < 3){ // Проверка счётчика
        day+=14
        if (day > days[month]){
            month++
            day = day - days[currentDate.getMonth()]
        }
        if (month == 12) {
            month = 0
        }
        monthGet(day, month)
        countclick++
    }
}

document.getElementById('button_date_left').onclick = function(){ // Переход на предыдущие две недели
    if (countclick > 0){ // Проверка счётчика
        if (day < 14){
            month--
            day = days[month] - (14 - day)
        } else {
            day-=14
        }   
        monthGet(day, month)
        countclick--
    }
}

// Отмечание выбраного дня
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
    calendarInput.value=data[0].textContent + '.' + String(month + 1) + '.'+ String(year)
})
data[1].addEventListener('click', function(){
    data[dataCon].classList.remove('check_week_day_num')
    data[1].classList.add('check_week_day_num')
    dataCon = 1
    calendarInput.value=data[1].textContent + '.' + String(month + 1) + '.'+ String(year)
})
data[2].addEventListener('click', function(){
    data[dataCon].classList.remove('check_week_day_num')
    data[2].classList.add('check_week_day_num')
    dataCon = 2
    calendarInput.value=data[2].textContent + '.' + String(month + 1) + '.'+ String(year)
})
data[3].addEventListener('click', function(){
    data[dataCon].classList.remove('check_week_day_num')
    data[3].classList.add('check_week_day_num')
    dataCon = 3
    calendarInput.value=data[3].textContent + '.' + String(month + 1) + '.'+ String(year)
})
data[4].addEventListener('click', function(){
    data[dataCon].classList.remove('check_week_day_num')
    data[4].classList.add('check_week_day_num')
    dataCon = 4
    calendarInput.value=data[4].textContent + '.' + String(month + 1) + '.'+ String(year)
})
data[5].addEventListener('click', function(){
    data[dataCon].classList.remove('check_week_day_num')
    data[5].classList.add('check_week_day_num')
    dataCon = 5
    calendarInput.value=data[5].textContent + '.' + String(month + 1) + '.'+ String(year)
})
data[6].addEventListener('click', function(){
    data[dataCon].classList.remove('check_week_day_num')
    data[6].classList.add('check_week_day_num')
    dataCon = 6
    calendarInput.value=data[6].textContent + '.' + String(month + 1) + '.'+ String(year)
})
data[7].addEventListener('click', function(){
    data[dataCon].classList.remove('check_week_day_num')
    data[7].classList.add('check_week_day_num')
    dataCon = 7
    calendarInput.value=data[7].textContent + '.' + String(month + 1) + '.'+ String(year)
})
data[8].addEventListener('click', function(){
    data[dataCon].classList.remove('check_week_day_num')
    data[8].classList.add('check_week_day_num')
    dataCon = 8
    calendarInput.value=data[8].textContent + '.' + String(month + 1) + '.'+ String(year)
})
data[9].addEventListener('click', function(){
    data[dataCon].classList.remove('check_week_day_num')
    data[9].classList.add('check_week_day_num')
    dataCon = 9
    calendarInput.value=data[9].textContent + '.' + String(month + 1) + '.'+ String(year)
})
data[10].addEventListener('click', function(){
    data[dataCon].classList.remove('check_week_day_num')
    data[10].classList.add('check_week_day_num')
    dataCon = 10
    calendarInput.value=data[10].textContent + '.' + String(month + 1) + '.'+ String(year)
})
data[11].addEventListener('click', function(){
    data[dataCon].classList.remove('check_week_day_num')
    data[11].classList.add('check_week_day_num')
    dataCon = 11
    calendarInput.value=data[11].textContent + '.' + String(month + 1) + '.'+ String(year)
})
data[12].addEventListener('click', function(){
    data[dataCon].classList.remove('check_week_day_num')
    data[12].classList.add('check_week_day_num')
    dataCon = 12
    calendarInput.value=data[12].textContent + '.' + String(month + 1) + '.'+ String(year)
})
data[13].addEventListener('click', function(){
    data[dataCon].classList.remove('check_week_day_num')
    data[13].classList.add('check_week_day_num')
    dataCon = 13
    calendarInput.value=data[13].textContent + '.' + String(month + 1) + '.'+ String(year)
})