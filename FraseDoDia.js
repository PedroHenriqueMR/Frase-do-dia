function fraseDoDia (frase){

    let data = new Date();
    let dia = data.getDate()-1;
    return frase[dia]
};

export default fraseDoDia;