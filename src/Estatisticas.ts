type TransacaoValor = Transação & { valor: number };
function filtrarValor(transacao: Transação): transacao is TransacaoValor {
  return transacao.valor !== null;
}

export default class Estatisticas {
  private transacoes;
  total;
  constructor(transacoes: Transação[]) {
    this.transacoes = transacoes;
    this.total = this.setTotal();
  }
  private setTotal() {
    return this.transacoes.filter(filtrarValor).reduce((acc, i) => {
      return acc + i.valor;
    }, 0);
  }
}
