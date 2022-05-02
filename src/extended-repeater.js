const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 *
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
// function repeater(/* str, options */) {
function repeater(str, options) {

  str = String(str);
  let res = [];
  let additionalSep = '';
  let simpleSep = (options.separator) ? options.separator : '+';
  const mainRepeat = (options.repeatTimes) ? options.repeatTimes : 1;
  let additionalSeparator = (`${options.addition}` !== 'undefined') ? `${options.addition}` : '';
  if (options) {
    let addSep = [];
    if (additionalSeparator) {
      let additionRepeatTimes = (options.additionRepeatTimes) ? options.additionRepeatTimes : 1;
      let additionSeparator = (options.additionSeparator) ? options.additionSeparator : '|';
      for (let i = 0; i < additionRepeatTimes; i++) {
        addSep.push(additionalSeparator);
      }
      additionalSep = addSep.join(additionSeparator);
    }
  }

  str += additionalSep;

  for (let i = 0; i < mainRepeat; i++) {
    res.push(str);
  }
  return res.join(simpleSep);

}

module.exports = {
  repeater
};
