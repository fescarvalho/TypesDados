export default function stringToDate(texto: string): Date {
  const [data, tempo] = texto.split(" ");
  const [hora, minutos] = tempo.split(":").map(Number);
  const [dia, mes, ano] = data.split("/").map(Number);
  return new Date(ano, mes - 1, dia, hora, minutos);
}
