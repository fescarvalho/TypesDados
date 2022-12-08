import moedaToNumber from "./moedaToNumber.js";
export default function normalizarTransação(transação) {
    return {
        id: transação.ID,
        nome: transação.Nome,
        email: transação.Email,
        data: transação.Data,
        status: transação.Status,
        moeda: transação["Valor (R$)"],
        valor: moedaToNumber(transação["Valor (R$)"]),
        pagamento: transação["Forma de Pagamento"],
        novo: Boolean(transação["Cliente Novo"]),
    };
}
//# sourceMappingURL=normalizarAPI.js.map