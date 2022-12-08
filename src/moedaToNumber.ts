/**
 * Recebe string:'1.200,50' retorna number: 1200.50
 */
export default function moedaToNumber(moeda: string): number | null {
  const numero = Number(moeda.replaceAll(".", "").replace(",", "."));
  console.log(numero);
  return isNaN(numero) ? null : numero;
}
