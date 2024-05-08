rep = document.getElementById('repetition').addEventListener('focus', function () {
    repetition.select();
});

porc = document.getElementById('percentege').addEventListener('focus', function () {
    percentege.select();
});

num = document.getElementById('number').addEventListener('focus', function () {
    number.select();
});

function runCode() {
    event.preventDefault();
    let num = parseInt(document.getElementById('number').value);
    let porc = parseInt(document.getElementById('percentege').value);
    let rep = parseInt(document.getElementById('repetition').value);
    for (let i = 0; i < rep; i++){
        num = num + (num * (porc / 100));
    }
    num = num.toFixed(2); 
    let answer = document.getElementById('answer');
    if (isNaN(num) || isNaN(porc) || isNaN(rep)) {
        answer.textContent = 'Digite todas as informações';
    }else {
        answer.textContent = num;
    }
    

}

