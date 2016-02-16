import moment from 'moment';


export function fromNow(futureDate) {
  if (!futureDate) {
    return 'No Deadline';
  }
  return moment(futureDate).calendar(
    null,
    {
      sameDay: '[Today]',
      nextDay: '[Tomorrow]',
      nextWeek: 'dddd',
      lastDay: '[Yesterday]',
      lastWeek: '[Last] dddd',
      sameElse: 'DD/MM/YYYY'
    }
  );
}
