// 1
// именование колбеков для слушателей
// три паторна на выбор любой можно использовать (handleTargetButtonClick)
/*targetBtn.addEventListener('click', onTargetButtonClick);

function handleTargetButtonClick() {
    console.log('Клик');
}
function targetButtonClickHandler() {
    console.log('Клик');
}
function onTargetButtonClick() {
    console.log('Клик');
}*/

// 1 пример события слушателя
// Вешаю слушателя на целевую кнопку и снимаю Модуль 6 2 урок до 18минуты
/*const targetBtn = document.querySelector('.js-target-btn');
const addListenerBtn = document.querySelector('.js-add-listener');
const removeListenerBtn = document.querySelector('.js-remove-listener');

addListenerBtn.addEventListener('click', (event) => {
    console.log('Вешаю слушателя события на целевую кнопку');

    targetBtn.addEventListener('click', onTargetButtonClick);
});

removeListenerBtn.addEventListener('click', (event) => {
    console.log('Снимаю слушателя события с целевой кнопки');

    targetBtn.removeEventListener('click', onTargetButtonClick);
});
// для отмены слушателя кулбек сохранил во внешнюю функцию
function onTargetButtonClick(event) {
    console.log('Клик по целевой кнопке');
}
*/

// 2 пример события сабмита формы
//  Формы 23:10
//блок выборки документов
/*const form = document.querySelector('.js-register-form');
//блок подписок Зарегестрироваться
form.addEventListener('submit', onFormSubmit);
//блок обработчиков всех подписок
function onFormSubmit(event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;

    console.dir(formElements);

    const mail = formElements.email.value;
    const password = formElements.password.value;
    const subscription = formElements.subscription.value;

    const formData = {
        mail,
        password,
        subscription,
    };

    console.log(formData)
}*/

// 2.1 2 вариант примера 2
// тоже самое только с formData

/*const form = document.querySelector('.js-register-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
//  formData под капотом использует forEach
    const formData = new FormData(event.currentTarget);

    console.log(formData);

    formData.forEach((value, name) => {
        console.log('onFormSubmit -> value,', value,);
        console.log('onFormSubmit -> name', name);
    });
}*/

// 3 пример 41 минута события инпутов

const refs = {
    input: document.querySelector('.js-input'),
    // для 1 задания  nameLabel
    nameLabel: document.querySelector('.js-button > span'),
    // для 2 задания licenseCheckbox
    licenseCheckbox: document.querySelector('.js-license'),
    btn: document.querySelector('.js-button'),
}
//refs.input.addEventListener('focus', onInputFocus); //получил фокус
//refs.input.addEventListener('blur', onInputBlur); //потерял фокус
refs.input.addEventListener('change', onInputChange);
refs.input.addEventListener('input', onInputChange);

// 1 задание делаем так что бы вместо анонима писалось имя
// input для текстовых полей
refs.input.addEventListener('input', onInputChange);
// строчка над это и  делает  через function onInputChange(event)

// Change радиобатонов и чекбоксов
refs.licenseCheckbox.addEventListener('change', onLicenseChange);

/*function onInputFocus() {
    console.log('Инпут получил фокус - событие focus');
}
function onInputBlur() {
    console.log('Инпут потерял фокус - событие dlur');
}*/

function onInputChange(event) { //value у инпутов
    refs.nameLabel.textContent = event.currentTarget.value;
}

function onLicenseChange(event) { //checked у чекбоксов и радиобатонов
    refs.btn.disabled = !event.currentTarget.checked;
}


// 4 события клавиатуры 56 мин
    //Типы событий: keypress, keydown, keyup
    // Ограничения keypress реагирует только на буквы и цифры
    //Свойства KeyboardEvent.key и KeyboardEvent.code

/*const refs = {
    output: document.querySelector('.js-output'),
    clearBtn: document.querySelector('.js-clear')
};

window.addEventListener('keypress', onKeypress);
refs.clearBtn.addEventListener('click', onClearOutput)

function onKeypress(event) {
    //console.log(event); 
    //console.log('event.key:', event.key); 
    //console.log('event.code:', event.code)//используется для кода клавишей

    refs.output.textContent += event.key
}
function onClearOutput() { 
    refs.output.textContent = '';
}*/
 

// 5 события мыши 1:05:30 мин
    // mouseenter и mouseleave (это ховер)
    // mouseover и mouseout
    // mousemove (chatty event - болтливое событие)

/*const boxRef = document.querySelector('.js-box');

//boxRef.addEventListener('mouseenter', onMouseEnter);
//boxRef.addEventListener('mouseleave', onMouseLeave);
boxRef.addEventListener('mousemove', onMouseLeave);

function onMouseEnter(event) {
    const box = event.currentTarget;
    box.classList.add('box--active');
}

function onMouseLeave(event) {
    const box = event.currentTarget;
    box.classList.remove('box--active');
}

function onMouseMove(event) {
    console.log(event);
}
*/



