'use strict';

function calc() {
    const firstOperand = Number(document.forms['calc'].elements['firstOperand'].value);
    const secondOperand = Number(document.forms['calc'].elements['secondOperand'].value);
    const operator = document.forms['calc'].elements['operator'].value;
    
    switch (operator) {
        case '-':
            alert('Ответ: ${firstOperand - secondOperand}');
            break;
        default:
            alert('Не знаю, что вы от меня хотите');
    }
}