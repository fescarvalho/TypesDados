import countBy from "./countBy.js";

type TransacaoValor = Transação & { valor: number };
function filtrarValor(transacao: Transação): transacao is TransacaoValor {
  return transacao.valor !== null;
}

export default class Estatisticas {
  private transacoes;
  total;
  pagamento;
  status;
  constructor(transacoes: Transação[]) {
    this.transacoes = transacoes;
    this.total = this.setTotal();
    this.pagamento = this.setPagamentos();
    this.status = this.setStatus();
  }
  private setTotal() {
    return this.transacoes.filter(filtrarValor).reduce((acc, i) => {
      return acc + i.valor;
    }, 0);
  }
  private setPagamentos() {
    return countBy(this.transacoes.map(({ pagamento }) => pagamento));
  }
  private setStatus() {
    return countBy(this.transacoes.map(({ status }) => status));
  }
}
