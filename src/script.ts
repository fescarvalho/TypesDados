import Estatisticas from "./Estatisticas.js";
import fetchData from "./fetchData.js";
import normalizarTransação from "./normalizarAPI.js";

async function handleData() {
  const data = await fetchData<TransaçãoAPI[]>(
    "https://api.origamid.dev/json/transacoes.json?",
  );
  if (!data) return;
  const transacoes = data.map(normalizarTransação);
  console.log(transacoes);
  preencherTabela(transacoes);
  preencherEstatisticas(transacoes);
}

function preencherEstatisticas(transacoes: Transação[]): void {
  const data = new Estatisticas(transacoes);

  const totalElement = document.querySelector<HTMLElement>("#total span");
  if (totalElement)
    totalElement.innerText = data.total.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
}

function preencherTabela(transacoes: Transação[]): void {
  const tabela = document.querySelector("#transacoes tbody");
  if (!tabela) return;
  transacoes.forEach((transacao) => {
    tabela.innerHTML += ` 
    <tr>
      <td>${transacao.nome}</td>
      <td>${transacao.email}</td>
      <td> R$ ${transacao.moeda}</td>
      <td>${transacao.pagamento}</td>
      <td>${transacao.status}</td>
    </tr>
    `;
  });
}
handleData();
