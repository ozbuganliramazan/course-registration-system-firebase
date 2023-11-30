export function getFormattedDate(date) {
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}

export function getLasWeek(date, days) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
}
