export function formatDate(dateString: string) {
  const meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
  const date = new Date(dateString);

  return `${date.getDate()} de ${meses[date.getMonth()]} de ${date.getFullYear()}`

}
