/* ------------------------------------
 * This method calculates time
 * using the number of sessions and
 * previus time.
 *
 * Note: each will be equal to 30 and
 * previousTime has default value of
 * 8:00.
 * ------------------------------------
 *
 * @params: no. of sessions(Number), previous time(Object)
 * @return: Object<{
 *    hours: Number,
 *    minutes: Number
 *  }>
 */
function calculateTime(sessions, previousTime = { hours: 8, minutes: 0 }) {
  // store time in minutes including previous hours and minutes.
  const totalMinutes =
    30 * sessions + previousTime.hours * 60 + previousTime.minutes;

  let hours = Math.trunc(totalMinutes / 60);
  let minutes = totalMinutes % 60;

  const time = {
    hours,
    minutes,
  };

  return time;
}

module.exports = { calculateTime };
