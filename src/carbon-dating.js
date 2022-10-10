const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
// function dateSample(/* sampleActivity */) {
function dateSample(sampleActivity ) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (!sampleActivity) return false;
  if (typeof sampleActivity !== 'string') return false;
  if (Number.isNaN(+sampleActivity)) return false;

  const number = +sampleActivity;
  if (number < 1 || number > MODERN_ACTIVITY) return false;
  const log = Math.log(MODERN_ACTIVITY) - Math.log(number)
  const k = 0.693 / HALF_LIFE_PERIOD;
  const res = log / k;
  return Math.ceil(log / k)
}

module.exports = {
  dateSample
};
