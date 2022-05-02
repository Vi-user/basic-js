const {NotImplementedError} = require('../extensions/index.js');

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
    if (!date) return 'Unable to determine the time of year!';
    if (!(date instanceof Date)) {
        throw new Error(`Invalid date!`)
    }
    try {
        date.getTime()
    } catch (error) {
        throw new Error(`Invalid date!`)
    }
    const
        seasons = {
            'winter': ['Dec', 'Jan', 'Feb'],
            'spring': ['Mar', 'Apr', 'May'],
            'summer': ['Jun', 'Jul', 'Aug'],
            'autumn': ['Sep', 'Oct', 'Nov']
        }
    const month = date.toString().split(' ')[1];
    for (let season in seasons) {
        if (seasons[season].includes(month)) return season;
    }
}

module.exports = {
    getSeason
};
