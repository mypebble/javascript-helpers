import moment from 'moment';

const DATE_FORMATS = [
  'YYYY-MM-DD',
  'YYYY-MM-DD HH:mm',
  'YYYY-MM-DD HH:mm:ss',
  'YYYY-MM-DD H:mm',
  'YYYY-MM-DD H:mm:ss',
  'DD/MM/YYYY',
  'DD/MM/YYYY HH:mm',
  'DD/MM/YYYY HH:mm:ss',
  'DD/MM/YYYY H:mm',
  'DD/MM/YYYY H:mm:ss',
  'DD/MM/YYYY',
  'YYYY/MM/DD',
  'YYYY/MM/DD HH:mm',
  'YYYY/MM/DD HH:mm:ss',
  'YYYY/MM/DD H:mm',
  'YYYY/MM/DD H:mm:ss'
];

/** Take a moment object and return the date formatted in dd/mm/yyyy */
export function formatObj(obj) {
  return obj.format('DD/MM/YYYY');
}

/** Take a dateString and return a moment object */
export function dateObj(dateString) {
  return moment(dateString, DATE_FORMATS);
}

/** Take a dateString and return the date formatted in dd/mm/yyyy */
export function formatDate(dateString) {
  const date = formatObj(dateObj(dateString));
  if (date === 'Invalid date') {
    return '';
  }
  return date;
}

/** Take a dateString and return the datetime formatted in dd/mm/yyyy hh:mm */
export function formatDateTime(dateString) {
  return dateObj(dateString).format('DD/MM/YYYY HH:mm');
}

/** Take a futureDate string and return a string representing future dates */
export function fromNow(futureDate) {
  if (!futureDate) {
    return 'No Deadline';
  }
  return dateObj(futureDate).calendar(
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
