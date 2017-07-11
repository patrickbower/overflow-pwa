export default function date(id) {
  const value = new Date(1000 * parseInt(id.substring(0, 8), 16));

  var day = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];

  var month = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ];

  return (
    day[value.getDay()] + ' ' + value.getDate() + ' ' + month[value.getMonth()]
  );
}
