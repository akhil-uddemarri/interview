const getMatrixResult = question => {
  let conditions = createConditionsFromMatrixPattern(question);

  return concatinateConditions(conditions);
};

const createConditionsFromMatrixPattern = question => {
  let rows = question.split("\n");
  let columns = rows[0].trim().split("");
  let conditions = [];

  for (let i = 1; i < rows.length; i++) {
    let row = rows[i].trim();
    let cells = row.split("");

    for (let j = 1; j < cells.length; j++) {
      let operator = cells[j];
      let operand1 = cells[0];
      let operand2 = columns[j - 1];

      if (operator === "-" || operator === "=") continue;

      if (operator === "<") {
        operand1 = columns[j - 1];
        operand2 = cells[0];
      }

      conditions.push(`${operand2}${operand1}`);
    }
  }

  return conditions;
};

const concatinateConditions = conditions => {
  let orderedData = [];
  let nextIndex, next, previousIndex, previous;

  while (conditions.length > 0) {
    let condition = conditions.splice(0, 1)[0];

    for (let i = 0; i < conditions.length; i++) {
      if (condition[1] === conditions[i][0]) {
        nextIndex = i;
      }

      if (condition[0] === conditions[i][1]) {
        previousIndex = i;
      }
    }

    previous = conditions[previousIndex];
    next = conditions[nextIndex];

    if (previousIndex > -1) {
      conditions.splice(previousIndex, 1);
    }

    if (nextIndex > -1) {
      conditions.splice(
        previousIndex < nextIndex ? nextIndex - 1 : nextIndex,
        1
      );
    }

    pushData(orderedData, previous, condition, next);
  }

  let str = "";

  for (let k = 0; k < orderedData.length - 1; k++) {
    str += orderedData[k][0];
  }

  str += orderedData[orderedData.length - 1];

  return str;
};

const addElementToArray = (arr, element) => {
  if (!element) return false;

  for (let i = 0; i < arr.length; i++) {
    if (element === arr[i]) return true;

    if (element[0] === arr[i][1]) {
      arr.splice(i + 1, 0, element);
      return true;
    }

    if (element[1] === arr[i][0]) {
      arr.splice(i, 0, element);
      return true;
    }
  }

  return false;
};

const pushData = (arr, previous, current, next) => {
  if (arr.length === 0) {
    if (previous) arr.push(previous);
    if (current) arr.push(current);
    if (next) arr.push(next);
    return;
  }

  if (addElementToArray(arr, previous)) {
    addElementToArray(arr, current);
    addElementToArray(arr, next);
  } else if (addElementToArray(arr, next)) {
    addElementToArray(arr, current);
    addElementToArray(arr, previous);
  } else {
    addElementToArray(arr, current);
    addElementToArray(arr, previous);
    addElementToArray(arr, next);
  }
};

module.exports = {
  getMatrixResult
};
