const getWordResult = question => {
  const wordMatches = question.match(/\w+/gm);
  const vowelMatches = question.match(/[aeiou]/gim);

  const wordCount = wordMatches.length;
  const noOfVowels = vowelMatches.length;
  const noOfConsonants = wordMatches.join("").length - vowelMatches.length;

  return `${wordCount}-${noOfConsonants}-${noOfVowels}`;
};

module.exports = {
  getWordResult
};
