// export const { format: formatPrice } = new Intl.NumberFormat('pt-BR', {
//   style: 'currency',
//   currency: 'BRL',
// });

export const formatPrice = num => {
  return `R$ ${parseFloat(num)
    .toFixed(2)
    .replace(/(\.)/g, ',')}`;
};
