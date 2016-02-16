import accounting from 'accounting';

export function formatAmount(amount, places) {
  const options = {
    precision: places || 2,
    thousand: ',',
    symbol: '£ '
  };
  return accounting.formatMoney(amount, options);
}

export function formatNumber(amount, precision) {
  return accounting.formatNumber(amount, precision || 2, ',');
}
