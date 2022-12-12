import moedaToNumber from "./moedaToNumber.js";
import stringToDate from "./stringToDate.js";

declare global {
  type FormaDePagamento = ["Boleto", "Cartão de Crédito"];
  type StatusPagamento = [
    "Paga",
    "Aguardando pagamento",
    "Recusada pela operadora de cartão",
    "Estornada",
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
  interface Transação {
    id: number;
    nome: string;
    email: string;
    data: Date;
    status: StatusPagamento;
    novo: boolean;
    moeda: string;
    valor: number | null;
    pagamento: FormaDePagamento;
  }
}

export default function normalizarTransação(transação: TransaçãoAPI): Transação {
  return {
    id: transação.ID,
    nome: transação.Nome,
    email: transação.Email,
    data: stringToDate(transação.Data),
    status: transação.Status,
    moeda: transação["Valor (R$)"],
    valor: moedaToNumber(transação["Valor (R$)"]),
    pagamento: transação["Forma de Pagamento"],
    novo: Boolean(transação["Cliente Novo"]),
  };
}
