window.onload = function(){ 
    // Переменные для хранения чисел и операций
    let a = ''           // Первое число
    let b = ''           // Второе число
    let expressionResult = ''  // Результат вычисления
    let selectedOperation = null  // Выбранная операция
        // Получаем доступ к экрану калькулятора в поле вывода
    const outputElement = document.getElementById("result")

    // Получаем все кнопки с цифрами (их id начинаются с "btn_digit_")
    const digitButtons = document.querySelectorAll('[id ^= "btn_digit_"]')

    function onDigitButtonClicked(digit) {
        // Если операция не выбрана, работаем с первым числом (a) - после выбора операции начинается ввод второго числа
        if (!selectedOperation) {
            // Проверяем, не пытаемся ли мы добавить вторую точку
            if ((digit != '.') || (digit == '.' && !a.includes(digit))) { 
                // здесь у нас происходит складывание сохраненного уже числа и нажатой цифры. Оба поля string, поэтому
                // каждый раз цифра записывается в конец строки. Например: a = '14', digit = '5', 
                // a += digit - это короткая запись a = a + digit - поэтомоу после этой операции a = '145'
                a += digit;
            }
            outputElement.innerHTML = a;
        } 
        // Если операция выбрана, работаем со вторым числом (b)
        else {
            if ((digit != '.') || (digit == '.' && !b.includes(digit))) { 
                b += digit;
                outputElement.innerHTML = b;        
            }
        }
    }

        // Настраиваем обработчики для цифровых кнопок - для каждой кнопки с цифрой и точкой вызываем выше написанную функцию по формированию числа
    digitButtons.forEach(button => {
        button.onclick = function() {
            // берем текст, написанный на кнопке - он и является цифрой
            const digitValue = button.innerHTML;
            onDigitButtonClicked(digitValue);
        }
    });

    function cumulative() {
        if (b === '' || !selectedOperation) {
            return;
        }

        switch (selectedOperation) {
            case '+':
                a = ((+a) + (+b)).toString(); 
                break;
            case '-':
                a = ((+a) - (+b)).toString();
                break;
            // case 'x':
            //     a = ((+a) * (+b)).toString();
            //     break;
            // case '/':
            //     a = ((+a) / (+b)).toString();
            //     break;
        }

        outputElement.innerHTML = a;
        b = '';
    }

    // Настраиваем обработчики для кнопок операций - сохраняем выбранную операцию в ранее созданную переменную selectedOperation
    document.getElementById("btn_op_mult").onclick = function() { 
        if (a === '') return;
        cumulative();
        selectedOperation = 'x';
    }
    document.getElementById("btn_op_plus").onclick = function() { 
        if (a === '') return;
        cumulative();
        selectedOperation = '+';
    }
    document.getElementById("btn_op_minus").onclick = function() { 
        if (a === '') return;
        cumulative();
        selectedOperation = '-';
    }
    document.getElementById("btn_op_div").onclick = function() { 
        if (a === '') return;
        cumulative();
        selectedOperation = '/';
    }
    document.getElementById("btn_op_sign").onclick = function() {
        if (!selectedOperation) {
            a = -a;
            outputElement.innerHTML = a;
        }
        else {
            b = -b;
            outputElement.innerHTML = b;
        }
    }
    document.getElementById("btn_op_percent").onclick = function() {
        if (!selectedOperation) {
            a /= 100;
            outputElement.innerHTML = a;
        }
        else {
            b /= 100;
            outputElement.innerHTML = b;
        }
    }
    document.getElementById("btn_op_backspace").onclick = function() {
        if (!selectedOperation) {
            a = outputElement.innerHTML;
            if (a.length === 2 && a[0] === '-') {
                a = '';
                outputElement.innerHTML = 0;
            }
            else {
                if (a.length > 1 && a !== '') {
                    a = a.slice(0, -1);
                    outputElement.innerHTML = a;
                }
                else {
                    a = '';
                    outputElement.innerHTML = 0;
                }
            }
        }
        else {
            b = outputElement.innerHTML;
            if (b.length === 2 && b[0] === '-') {
                b = '';
                outputElement.innerHTML = 0;
            }
            else {
                if (b.length > 1 && b !== '') {
                    b = b.slice(0, -1);
                    outputElement.innerHTML = b;
                }
                else {
                    b = '';
                    outputElement.innerHTML = 0;
                }
            }
        }
    }
    document.getElementById("btn_op_square").onclick = function() {
        if (!selectedOperation) {
            a *= a;
            outputElement.innerHTML = a;
        }
        else {
            b *= b;
            outputElement.innerHTML = b;
        }
    }
    document.getElementById("btn_op_sqrt").onclick = function() {
        if (!selectedOperation) {
            a = a ** 0.5;
            outputElement.innerHTML = a;
        }
        else {
            b = b ** 0.5;
            outputElement.innerHTML = b;
        }
    }
    document.getElementById("btn_op_factorial").onclick = function() {
        let res = 1;
        if (!selectedOperation) {
            for (let i = 1; i <= a; i++) {
                res *= i;
            }
            a = res;
            outputElement.innerHTML = a;
        }
        else {
            for (let i = 1; i <= b; i++) {
                res *= i;
            }
            b = res;
            outputElement.innerHTML = b;
        }
    }
    document.getElementById("btn_op_rotate").onclick = function() {
        if (!selectedOperation) {
            a = 1/a;
            outputElement.innerHTML = a;
        }
        else {
            b = 1/b;
            outputElement.innerHTML = b;
        }
    }
    flag = true;
    document.getElementById("btn_change_theme").onclick = function() {
        flag = !flag;
        if (flag) {
            document.body.style.backgroundColor = 'black';
        }
        else {
            document.body.style.backgroundColor = 'white';
        }
    }
    document.getElementById("btn_change_res_theme").onclick = function() {
        flag = !flag;
        if (flag) {
            document.getElementById("result").style.backgroundColor = 'white';
            document.getElementById("result").style.color = 'black';
        }
        else {
            document.getElementById("result").style.backgroundColor = 'black';
            document.getElementById("result").style.color = 'white';
        }
    }
 
        // Очищаем все значения при нажатии на кнопку C (вешаем обработчик события click на кнопку С)
    document.getElementById("btn_op_clear").onclick = function() { 
        a = ''
        b = ''
        selectedOperation = ''
        expressionResult = ''
        outputElement.innerHTML = 0
    }
        // Вычисляем результат при нажатии на = (вешаем обработчик события click на кнопку =)
    document.getElementById("btn_op_equal").onclick = function() { 
        // Проверяем, что у нас есть оба числа и операция
        if (a === '' || b === '' || !selectedOperation)
            return
            
        // Выполняем выбранную операцию - чтобы не плодить if, воспользуемся удобной и более наглядной функцией сравнения switch, которая на основе значения переданной переменной выполняет нужный кейс. В case указывается ожидаемое точное значение переменной (это может быть любое значение), а затем после : пишется код, который нужно выполнить в данном случае. Case проверяются последовательно, выход из switch происходит при попадании на break или если значение не совпало ни с чем.
        switch(selectedOperation) { 
            case 'x':
                expressionResult = (+a) * (+b)
                // обязательно пишется в конце действий case, чтобы выйти из switch, иначе продолжится сравнение case дальше
                break;
            case '+':
                expressionResult = (+a) + (+b)
                break;
            case '-':
                expressionResult = (+a) - (+b)
                break;
            case '/':
                expressionResult = (+a) / (+b)
                break;
            // желательно (но не обязательно) всегда прописывать дефолтное поведение, в случае если в переменной окажется не перечисленное выше значение. в нашем случае это не нужно.
            default:
                break;
        }
        
        // Сохраняем результат и очищаем второе число, чтобы при новом вводе записывать значение нового числа в b
        a = expressionResult.toString()
        b = ''
        selectedOperation = null

        // Показываем результат на экране
        outputElement.innerHTML = a
    }
};