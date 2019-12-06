const { getAdditionResult } = require("./addition");
const { getWordResult } = require("./words");
const { getMatrixResult } = require("./matrix");

const isAdditionPattern = question => /[(\d+\s)(\+)]+\s=\s\?/gm.test(question);

const isWordPattern = question =>
  /\w+/gm.test(question) &&
  !/\d+/gm.test(question) &&
  !/\?/gm.test(question) &&
  !/\-\-/gm.test(question);

const isSequencePattern = question => /(<\s)(\d+\s)+>/g.test(question);

const isMatrixPattern = question => /[ABCDEF]+/.test(question);

const getResultForQuestion = (question = "") => {
  console.log("*** ", question);

  if (question === "PING") return "PONG";

  if (question === "What is your name?") return "Akhil Uddemarri";

  if (question === "What is your quest?") return "coding";

  if (isAdditionPattern(question)) {
    return getAdditionResult(question);
  }

  if (isWordPattern(question)) {
    return getWordResult(question);
  }

  if (isSequencePattern(question)) {
    return "";
  }

  if (isMatrixPattern(question)) {
    return getMatrixResult(question);
  }

  return "";
};

module.exports = {
  getResultForQuestion
};
