const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names ) {
  if (names.length < 1) return names;
  if (new Set(names).size === names.length) return names;

  let newArr = [];
  for (let i = 0; i < names.length; i++) {
    const counter = newArr.filter(name => name === names[i]).length;
    if (counter > 0) {
      if (newArr.includes(`${names[i]}(${counter})`)) {
        newArr.push(`${names[i]}(${counter+1})`)
      } else {
        newArr.push(`${names[i]}(${counter})`)
      }
    } else {
      newArr.push(names[i])
    }
  }
  return newArr;
}

module.exports = {
  renameFiles
};
