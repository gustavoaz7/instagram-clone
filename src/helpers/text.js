export const addPluralS = (text, quantity) => {
  return `${text}${quantity > 1 ? 's' : ''}`;
};
