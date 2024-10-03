import getBudgetObject from './7-getBudgetObject.js';

export default function getFullBudgetObject(income, gdp, capita) {
  const b = getBudgetObject(income, gdp, capita);
  return {
    ...b,
    getIncomeInDollars(in) {
      return `$${in}`;
    },
    getIncomeInEuros(in) {
      return `${in} euros`;
    },
  };
}

