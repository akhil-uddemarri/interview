const getAdditionResult = question => {
  const matches = question.match(/\d+/gm);
  return matches
    .reduce((acc, num) => {
      acc = acc + +num;
      return acc;
    }, 0)
    .toString();
};

module.exports = { getAdditionResult };
