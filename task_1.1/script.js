function randomString(n) {
    let str = '';
    while (str.length < n) {
        str += Math.floor(Math.random() * 2);
    }
    return str;
}

function count(str) {
    let k = 0;
    let max = 0;
    for(let i = 0; i < n; i ++)
    {
        if(str[i] == 0) {
            k++;
        } else if(str[i] == 1) {
            if(k > max) {
                max = k;
            }
            k = 0;
        } else {
            alert(`Введен недопустимый символ.`);
        }
    }
    return max;
}


let n = prompt("Введите длину строки: ");
if ((isNaN(parseFloat(n)) || !isFinite(n)) || !(n % 1 === 0) || n < 1)  {
    alert('Неверные входные данные.');
}  else  {
    let str = randomString(n);
    document.write(`<p>${str}</p>`);
    document.write(count(str));
}

