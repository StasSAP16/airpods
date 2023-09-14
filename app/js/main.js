//нашли все кнопки
const chooseColor = document.querySelectorAll('.choose__color-btn');
//нашли все строки с content-item весь контент который должен меняться
const contentItem = document.querySelectorAll('.content-item');

//вешаем событие на один из найденных баттонов
chooseColor.forEach(function(element){
    element.addEventListener('click', open)
})

function open(evt){
    /////////////////////////////////////////////////////////////////////////////////
    //1добавляем актив к кликнутому элементу/баттону
    const target = evt.currentTarget;
    //2находим у баттонана атрибут data-button="color--blue"
    const button = target.dataset.button;
    //3 создаем переменную в который будут строки у которых есть data-button="color--blue"
    const contentActive = document.querySelectorAll(`.${button}`)

    //1перед добавлением активности баттона сначала убираем активность с баттона
    chooseColor.forEach(function(item){
        item.classList.remove('choose__color-btn--active')
    })
    //1добавляем актив
    target.classList.add('choose__color-btn--active')
    /////////////////////////////////////////////////////////////////////////////////

    //3 убираем у всех контент элементов признак активности
    contentItem.forEach(function(item){
        item.classList.remove('content-item__active')
    })

    //4 пробегаемся и добавляем класс активности согласно data-button="color--blue"
    contentActive.forEach(function(item){
        item.classList.add('content-item__active')
    })
}