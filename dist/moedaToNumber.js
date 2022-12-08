export default function moedaToNumber(moeda) {
    const numero = Number(moeda.replaceAll(".", "").replace(",", "."));
    console.log(numero);
    return isNaN(numero) ? null : numero;
}
//# sourceMappingURL=moedaToNumber.js.map