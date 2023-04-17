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
function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string' || !sampleActivity || isNaN(parseFloat(sampleActivity))) {
    return false;
  }

  const activity = parseFloat(sampleActivity);

  if (activity <= 0 || activity > MODERN_ACTIVITY) {
    return false;
  }

  const ratio = MODERN_ACTIVITY / activity;
  const k = 0.693 / HALF_LIFE_PERIOD;
  const age = Math.ceil(Math.log(ratio) / k);

  return age;
}
module.exports = {
  dateSample
};
