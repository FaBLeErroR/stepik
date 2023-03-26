function same_count(n){
    let count = 0;
    let b_sym;
    let e_sym;
    let i = 0;
    while (i < n.length) {
        b_sym = n[i];
        //document.write(n[i]);
        i = n.indexOf(' ', i);
        if(i != -1){
            e_sym = n[i - 1];
            //document.write(n[i - 1]);
        }  else {
            e_sym = n[n.length - 1];
            document.write(`<p>${b_sym} ${e_sym}</p>`);
            if (equal_symbol(b_sym, e_sym))
                count++;
            return count;
        }
        document.write(`<p>${b_sym} ${e_sym}</p>`);
        if (equal_symbol(b_sym, e_sym)) {
            count++;
        }
        i++;
    }
    return count;
}

function equal_symbol(a, b){
    if((a.charCodeAt(0) >= 1040 && a.charCodeAt(0) <= 1105)
        || (a.charCodeAt(0) >= 65 && a.charCodeAt(0) <= 90)
        || (a.charCodeAt(0) >= 97 && a.charCodeAt(0) <= 122)){
        if((b.charCodeAt(0) >= 1040 && b.charCodeAt(0) <= 1105)
            || (b.charCodeAt(0) >= 65 && b.charCodeAt(0) <= 90)
            || (b.charCodeAt(0) >= 97 && b.charCodeAt(0) <= 122)){
            if(a == b) {
                return true;
            } else {
                return false;
            }
        }
    }
    return false;
}




let n = prompt("Введите строку: ", "тор рот рор тот");
document.write(same_count(n));