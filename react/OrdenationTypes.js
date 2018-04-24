const ordenationTypes = {
  ORDER_BY_TOP_SALE_DESC: {
    name: 'Sales',
    value: 'OrderByTopSaleDESC',
  },
  ORDER_BY_PRICE_DESC: {
    name: 'Price, descending',
    value: 'OrderByPriceDESC',
  },
  ORDER_BY_PRICE_ASC: {
    name: 'Price, ascending',
    value: 'OrderByPriceASC',
  },
}

export function getOrdenationNames() {
  const names = []
  for (const key in ordenationTypes) {
    names.push(ordenationTypes[key].name)
  }
  return names
}

export function getOrdenationValues() {
  const values = []
  for (const key in ordenationTypes) {
    values.push(ordenationTypes[key].value)
  }
  return values
}

export default ordenationTypes
