import fetchData from "./fetchData.js";
import normalizarTransação from "./normalizarAPI.js";
async function handleData() {
    const data = await fetchData("https://api.origamid.dev/json/transacoes.json?");
    if (!data)
        return;
    const transacoes = data.map(normalizarTransação);
    console.log(transacoes);
}
handleData();
//# sourceMappingURL=script.js.map