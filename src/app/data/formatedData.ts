function formatedData(date: string) {
  const newDate = new Date(date);
  const year = newDate.getFullYear();
  const month = getMonth(newDate.getMonth());
  const day = newDate.getDate();

  return `${month} ${day}, ${year}`;
}

function getMonth(month: number) {
  switch (month) {
    case 0:
      return 'Janeiro';
    case 1:
      return 'Fevereiro';
    case 2:
      return 'Março';
    case 3:
      return 'Abril';
    case 4:
      return 'Maio';
    case 5:
      return 'Junho';
    case 6:
      return 'Julho';
    case 7:
      return 'Agosto';
    case 8:
      return 'Setembro';
    case 9:
      return 'Outubro';
    case 10:
      return 'Novembro';
    case 11:
      return 'Dezembro';
    default:
      return '';
  }
}

export default formatedData;
