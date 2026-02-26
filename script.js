window.onload = function() { 
    let orionA = ''
    let orionB = ''
    let orionResult = ''
    let orionOperation = null 

    const orionDisplay = document.getElementById("orion-result")
    const digitButtons = document.querySelectorAll('[id ^= "btn_digit_"]')

    function onDigitButtonClicked(digit) {
        if (!orionOperation) {
            if ((digit != '.') || (digit == '.' && !orionA.includes(digit))) { 
                orionA += digit;
            }
            orionDisplay.innerHTML = orionA;
        } 
        else {
            if ((digit != '.') || (digit == '.' && !orionB.includes(digit))) { 
                orionB += digit;
                orionDisplay.innerHTML = orionB;        
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
        if (orionB === '' || !orionOperation) {
            return;
        }
        switch (orionOperation) {
            case '+': orionA = ((+orionA) + (+orionB)).toString(); break;
            case '-': orionA = ((+orionA) - (+orionB)).toString(); break;
            case 'x': orionA = ((+orionA) * (+orionB)).toString(); break;
            case '/': orionA = ((+orionA) / (+orionB)).toString(); break;
        }
        orionDisplay.innerHTML = orionA;
        orionB = '';
    }

    document.getElementById("btn_op_mult").onclick    = function() { if (orionA === '') return; cumulative(); orionOperation = 'x'; }
    document.getElementById("btn_op_plus").onclick    = function() { if (orionA === '') return; cumulative(); orionOperation = '+'; }
    document.getElementById("btn_op_minus").onclick   = function() { if (orionA === '') return; cumulative(); orionOperation = '-'; }
    document.getElementById("btn_op_div").onclick     = function() { if (orionA === '') return; cumulative(); orionOperation = '/'; }

    document.getElementById("btn_op_sign").onclick = function() {
        if (!orionOperation) { orionA = -orionA; orionDisplay.innerHTML = orionA; }
        else                 { orionB = -orionB; orionDisplay.innerHTML = orionB; }
    }

    document.getElementById("btn_op_percent").onclick = function() {
        if (!orionOperation) { orionA /= 100; orionDisplay.innerHTML = orionA; }
        else                 { orionB /= 100; orionDisplay.innerHTML = orionB; }
    }

    document.getElementById("btn_op_backspace").onclick = function() {
        if (!orionOperation) {
            orionA = orionDisplay.innerHTML;
            if (orionA.length === 2 && orionA[0] === '-') { orionA = ''; orionDisplay.innerHTML = 0; }
            else if (orionA.length > 1) { orionA = orionA.slice(0, -1); orionDisplay.innerHTML = orionA; }
            else { orionA = ''; orionDisplay.innerHTML = 0; }
        } else {
            orionB = orionDisplay.innerHTML;
            if (orionB.length === 2 && orionB[0] === '-') { orionB = ''; orionDisplay.innerHTML = 0; }
            else if (orionB.length > 1) { orionB = orionB.slice(0, -1); orionDisplay.innerHTML = orionB; }
            else { orionB = ''; orionDisplay.innerHTML = 0; }
        }
    }

    document.getElementById("btn_op_square").onclick = function() {
        if (!orionOperation) { orionA *= orionA; orionDisplay.innerHTML = orionA; }
        else                 { orionB *= orionB; orionDisplay.innerHTML = orionB; }
    }

    document.getElementById("btn_op_sqrt").onclick = function() {
        if (!orionOperation) { orionA = orionA ** 0.5; orionDisplay.innerHTML = orionA; }
        else                 { orionB = orionB ** 0.5; orionDisplay.innerHTML = orionB; }
    }

    document.getElementById("btn_op_factorial").onclick = function() {
        let orionFactorial = 1;
        if (!orionOperation) {
            for (let i = 1; i <= orionA; i++) orionFactorial *= i;
            orionA = orionFactorial;
            orionDisplay.innerHTML = orionA;
        } else {
            for (let i = 1; i <= orionB; i++) orionFactorial *= i;
            orionB = orionFactorial;
            orionDisplay.innerHTML = orionB;
        }
    }

    document.getElementById("btn_op_speed").onclick = function() {
        const orionMinutes = parseFloat(!orionOperation ? orionA : orionB);
        if (isNaN(orionMinutes) || orionMinutes < 0) { orionDisplay.innerHTML = 0; return; }

        const orionTime = orionMinutes * 60;
        let orionVelocity;

        if (orionTime <= 510)        orionVelocity = 55 * orionTime;
        else if (orionTime <= 11880) orionVelocity = 7800 - 0.35 * (orionTime - 510);
        else if (orionTime <= 16200) orionVelocity = 8900 - 12   * (orionTime - 11880);
        else { orionDisplay.innerHTML = "Err: >270 мин"; return; }

        orionVelocity = Math.max(0, Math.round(orionVelocity));

        if (!orionOperation) orionA = orionVelocity.toString();
        else                 orionB = orionVelocity.toString();

        orionDisplay.innerHTML = orionVelocity;
    }

    let orionPageTheme = true;
    document.getElementById("btn_change_theme").onclick = function() {
        orionPageTheme = !orionPageTheme;
        document.body.style.backgroundColor = orionPageTheme ? 'black' : 'white';
    }

    let orionWindowTheme = true;
    document.getElementById("btn_change_res_theme").onclick = function() {
        orionWindowTheme = !orionWindowTheme;
        orionDisplay.style.backgroundColor = orionWindowTheme ? 'white' : 'black';
        orionDisplay.style.color           = orionWindowTheme ? 'black' : 'white';
    }

    document.getElementById("btn_op_clear").onclick = function() { 
        orionA = ''; orionB = ''; orionOperation = null; orionResult = '';
        orionDisplay.innerHTML = 0;
    }

    document.getElementById("btn_op_equal").onclick = function() { 
        if (orionA === '' || orionB === '' || !orionOperation) return;
        switch (orionOperation) {
            case 'x': orionResult = (+orionA) * (+orionB); break;
            case '+': orionResult = (+orionA) + (+orionB); break;
            case '-': orionResult = (+orionA) - (+orionB); break;
            case '/': orionResult = (+orionA) / (+orionB); break;
        }
        orionA = orionResult.toString();
        orionB = ''; orionOperation = null;
        orionDisplay.innerHTML = orionA;
    }
};