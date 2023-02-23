const Return_only_number = function (val) {
  let onlyNumber = "";

  for (let i = 0; i < [val][0].length; i++) {
    const el = [val][0][i];

    if (!isNaN(el) && el !== " ") {
      onlyNumber += el;
    }
  }

  return onlyNumber;
};

export default Return_only_number;
