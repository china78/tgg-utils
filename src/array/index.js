// εεΊζε
const sortFn = (data, type, attribute) => {
  const sortUp = (a, b) => {
    return a[attribute] - b[attribute]
  }
  const sortDown = (a, b) => {
    return b[attribute] - a[attribute]
  }
  if (type === 0) {
    return data.sort(sortUp);
  } else {
    return data.sort(sortDown);
  }
}

export { sortFn };