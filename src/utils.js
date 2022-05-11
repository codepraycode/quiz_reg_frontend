function parseTxt(txt, splitBy = ' ') {
    if (!txt) return '';

    let repr = txt.split(splitBy); //txt;

    // if (txt.includes(splitBy)) {
    //     repr = txt.split(splitBy);

    //     repr = repr.map(ech => {
    //         return ech[0].toUpperCase() + ech.slice(1)
    //     });
    // }
    repr = repr.map(ech => {
        return ech[0].toUpperCase() + ech.slice(1)
    });

    return repr.join(" ");

}


function rev_parseTxt(txt, splitedBy = ' ') {
    if (!txt) return '';

    let repr = txt.split(' '); //txt;

    repr = repr.map(ech => {
        return ech[0].toLowerCase() + ech.slice(1)
    });

    return repr.join(splitedBy);

}






module.exports = {
    parseTxt,
    rev_parseTxt
}