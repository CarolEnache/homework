export const buildSentence = (str, dict) => {
  return findWord([str], dict).map((item) => item.trim());
};

export const findWord = (str, dict) => {
  const newStrArr = [];
  for (let i = 0; i < str.length; i++) {
    const currentStr = str[i];
    let mostRecentSpace = currentStr.lastIndexOf(' ') + 1;
    if (mostRecentSpace === currentStr.length) {
      newStrArr.push(currentStr);
    } else {
      for (let j = 0; j < dict.length; j++) {
        const currentDir = dict[j];
        const subStr = currentStr.substring(
          mostRecentSpace,
          mostRecentSpace + currentDir.length
        );

        if (subStr === currentDir) {
          const newStr =
            currentStr.substring(0, mostRecentSpace) +
            subStr +
            ' ' +
            currentStr.substring(mostRecentSpace + currentDir.length);
          newStrArr.push(newStr);
        }
      }
    }
  }
  return newStrArr.every((item) => item[item.length - 1] === ' ')
    ? newStrArr
    : findWord(newStrArr, dict);
};
