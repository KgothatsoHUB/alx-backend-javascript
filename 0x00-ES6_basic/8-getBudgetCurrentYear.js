function getCurrentYear() {
  return new Date().getFullYear();
}

export default function getBudgetForCurrentYear(i, g, c) {
  return {
    [`income-${getCurrentYear()}`]: i,
    [`gdp-${getCurrentYear()}`]: g,
    [`capita-${getCurrentYear()}`]: c,
  };
}

