window.onload = function() { 
    let a = ''
    let b = ''
    let expressionResult = ''
    let selectedOperation = null 
    

    const outputElement = document.getElementById("result")
    const digitButtons = document.querySelectorAll('[id ^= "btn_digit_"]')

    function onDigitButtonClicked(digit) {
        if (!selectedOperation) {
            if ((digit != '.') || (digit == '.' && !a.includes(digit))) { 
                a += digit;
            }
            outputElement.innerHTML = a;
        } 
        else {
            if ((digit != '.') || (digit == '.' && !b.includes(digit))) { 
                b += digit;
                outputElement.innerHTML = b;        
            }
        }
    }

    digitButtons.forEach(button => {
        button.onclick = function() {
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
    flag_1 = true;
    document.getElementById("btn_change_theme").onclick = function() {
        flag_1 = !flag_1;
        if (flag_1) {
            document.body.style.backgroundColor = 'black';
        }
        else {
            document.body.style.backgroundColor = 'white';
        }
    }
    flag_2 = true;
    document.getElementById("btn_change_res_theme").onclick = function() {
        flag_2 = !flag_2;
        if (flag_2) {
            document.getElementById("result").style.backgroundColor = 'white';
            document.getElementById("result").style.color = 'black';
        }
        else {
            document.getElementById("result").style.backgroundColor = 'black';
            document.getElementById("result").style.color = 'white';
        }
    }

    document.getElementById("btn_op_clear").onclick = function() { 
        a = ''
        b = ''
        selectedOperation = ''
        expressionResult = ''
        outputElement.innerHTML = 0
    }

    document.getElementById("btn_op_equal").onclick = function() { 
        if (a === '' || b === '' || !selectedOperation)
            return
        switch(selectedOperation) { 
            case 'x':
                expressionResult = (+a) * (+b)
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
            default:
                break;
        }
        
        a = expressionResult.toString()
        b = ''
        selectedOperation = null

        outputElement.innerHTML = a
    }
};