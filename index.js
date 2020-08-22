// Your code here

function mapToNegativize(values) {
  let new_values = [];
  for (let i = 0; i < values.length; i++)
    {
      new_values.push(-1*values[i]);
    }
  return new_values;
}

function mapToNoChange(values) {
  let new_values = [];
  for (let i = 0; i < values.length; i++)
    {
      new_values.push(values[i]);
    }
  return new_values;
}

function mapToDouble(values) {
  let new_values = [];
  for (let i = 0; i < values.length; i++) {
    new_values.push(values[i]*2)
  }
  return new_values;
}

function mapToSquare(values) {
  let new_values = [];
  for (let i = 0; i < values.length; i++) {
    new_values.push(values[i]**2)
  }
  return new_values;
}

function reduceToTotal(values, startingPoint = 0) {
  for (let i = 0; i < values.length; i++) {
    startingPoint += values[i]
  }
  return startingPoint;
}

function reduceToAllTrue(values) {
  for (let i = 0; i < values.length; i++) {
    if (values[i] == true) {
      return true;
    } else {
      return false;
      break;
    }
  }
}

function reduceToAnyTrue(values) {
  for (let i = 0; i < values.length; i++) {
    if (values[i] == true) {
      return true;
      break;
    } else {
      return false;
    }
  }
}
