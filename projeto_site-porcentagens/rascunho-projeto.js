let pc = Number(window.prompt('sapo'));
    let rep = Number(window.prompt('sapo'));
    let num = Number(window.prompt('sapo'));
    let res = num;
    let por = pc;
    if (pc < 0 || pc > 100) {
        window.alert ('Número maior que 100 ou menor que 0');
    }
    else {
        por = por / 100;
        window.alert (por)
        for (let i = 0; i < rep; i++){
            res = res + (res * por);
            window.alert(res);
        }
        res = res.toFixed(2);
        window.alert('O resultado da repetição de ' + rep + ' vezes com ' + pc + '% de acréscimo sobre o valor ' + num + ' é: ' + res);
    }