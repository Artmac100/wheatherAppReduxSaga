export const toDatestring = (intTime) => {
  const d = new Date(intTime);
  const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  return `${d.getDate()} ${month[d.getMonth()]} ${d.getFullYear()}`;
};

export const toTimeSting = (intTime) => {
  const d = new Date(intTime);
  let minutes = d.getMinutes();
  if ((minutes + '').length === 1) {
    minutes = '0' + d.getMinutes();
  }
  return `${d.getHours()}:${minutes}`;
};

export const toDayAndDate = (intTime) => {
  const d = new Date(intTime);
  const weekday = [
    'SUN',
    'MON',
    'TUE',
    'WED',
    'THU',
    'FRI',
    'SAT',
  ];
  return `${weekday[d.getDay()]} ${d.getDate()}`;
};
