const formatValue = (value: number): string =>
  // TODO
  Intl.NumberFormat('PT-br', { style: 'currency', currency: 'BRL' }).format(
    value,
  );

export default formatValue;
