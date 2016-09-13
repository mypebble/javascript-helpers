import accounting from 'accounting';

export function formatAmount(amount, places = 2) {
  const options = {
    precision: places,
    thousand: ',',
    symbol: '£ '
  };
  return accounting.formatMoney(amount, options);
}

export function formatNumber(amount, precision) {
  return accounting.formatNumber(amount, precision || 2, ',');
}
