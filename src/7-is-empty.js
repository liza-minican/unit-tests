const isEmptyObj = (stringArrayOrObject) => {
  for (var key in stringArrayOrObject) {
    if (stringArrayOrObject.hasOwnProperty(key)) return false;
  }
  return true;
};

export const isEmpty = (stringArrayOrObject) => {
  const type = typeof stringArrayOrObject;
  if (type === "string" && stringArrayOrObject === "") {
    return true;
  } else if (
    Array.isArray(stringArrayOrObject) &&
    stringArrayOrObject.length === 0
  ) {
    return true;
  } else if (
    type === "object" &&
    type !== null &&
    !Array.isArray(stringArrayOrObject) &&
    isEmptyObj(stringArrayOrObject) === true
  ) {
    return true;
  } else {
    return false;
  }
};
