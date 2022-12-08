declare global {
    type FormaDePagamento = ["Boleto", "Cartão de Crédito"];
    type StatusPagamento = [
        "Paga",
        "Aguardando pagamento",
        "Recusada pela operadora de cartão",
        "Estornada"
    ];
    interface TransaçãoAPI {
        Nome: string;
        ID: number;
        Email: string;
        Data: string;
        ["Cliente Novo"]: number;
        ["Forma de Pagamento"]: FormaDePagamento;
        ["Valor (R$)"]: string;
        ["Status"]: StatusPagamento;
    }
}
export default function normalizarTransação(transação: TransaçãoAPI): {
    id: number;
    nome: string;
    email: string;
    data: string;
    status: StatusPagamento;
    moeda: string;
    valor: number | null;
    pagamento: FormaDePagamento;
    novo: boolean;
};
