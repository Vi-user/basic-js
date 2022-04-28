const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
// function getSeason(/* date */) {
function getSeason(date) {
  // const
  //     seasons = {
  //   'winter': ['Dec', 'Jan', 'Feb'],
  //   'spring': ['Mar', 'Apr', 'May'],
  //   'summer': ['Jun', 'Jul', 'Aug'],
  //   'autumn': ['Sep', 'Oct', 'Nov']
  //     }
  //
  // if (!date) return 'Unable to determine the time of year!';
  // //checkdate
  // //unittime
  // //toDate
  // //getMonth
  // //include consts
  //
  // try {
  //   const month = date.toDateString().split(' ').slice(1,2)[0];
  //   for (let season in seasons) {
  //     console.log(season)
  //     if (season.includes(month)) return season;
  //   }
  //
  //
  // } catch (err) {
  //   return 'Invalid date!';
  // }

  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  getSeason
};
