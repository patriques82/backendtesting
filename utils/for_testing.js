const reverse = (string) => {
  return string.split("").reverse().join("");
};

const average = (array) => {
  const reducer = (sum, item) => {
    return sum + item;
  };

  const sum = array.reduce(reducer, 0)
  if (sum === 0) {
    return 0;
  }
  return sum / array.length;
};

export { reverse, average };
