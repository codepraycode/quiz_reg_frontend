function reprTxt(txt, splitBy = ' ') {
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


module.exports = {
    reprTxt
}