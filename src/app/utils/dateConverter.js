import * as constants from '../constants/dateTimeConstants';

export const toDatestring = (intTime) => {
  const d = new Date(intTime);
  return `${d.getDate()} ${constants.months[d.getMonth()]} ${d.getFullYear()}`;
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
  return `${constants.weekdays[d.getDay()]} ${d.getDate()}`;
};
