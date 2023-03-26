function begin_lines(n) {
    document.write(`<div>`);
    for(let i = 1; i <= n; i++)
        document.write(`<hr width="${Math.round(100 / i)}%">`);
    document.write(`</div>`);
}
function end_lines(n) {
    document.write(`<div>`);
    for(let i = n; i > 0; i--) {
        document.write(`<hr width="${Math.round(100 / i)}%">`);
    }
    document.write(`</div>`);
}
function draw_string(i, n) {
    document.write(`<tr>`);
    document.write('<td></td>'.repeat(i / 2) +
        '<td bgcolor="#808080"></td>'.repeat(n - i) + '<td></td>'.repeat(i / 2));
    document.write(`</tr><tr>`);
    document.write('<td></td>'.repeat(n));
    document.write(`</tr>`);
}
function draw_table(n) {
    document.write(`<div></div><table border="1" align="center" width="50%" cellpadding="15" cellspacing="0">`)
    for (let i = 0; i < n; i += 2) {
        draw_string(i, n);
    }
    document.write(`</table></div>`)
}


let n = prompt("Введите n: ");
if (n < 2 || n > 15) {
    alert("Введено число не из диапазона 2-15.")
}  else if((isNaN(parseFloat(n)) || !isFinite(n)) || !(n % 1 == 0)) {
    alert("Некоректный ввод.")
}  else {
    begin_lines(n);
    draw_table(n);
    end_lines(n);
}

