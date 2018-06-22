export function getDiscountPercent(price1, price2) {
    return Math.round(100*(price1 - price2)/price1);
}

export function shuffle(array, elements) {
    let result = [];
    let e = elements;
    let j = 0;
    let existed = [];
    for (let i = 0; i < e; i++) {
        j = Math.floor(Math.random() * (array.length));
        if(existed.indexOf(j) === -1) {
            existed.push(j);
            result.push(array[j]);
        } else {
            i--;
        }
    }

    return result;
}