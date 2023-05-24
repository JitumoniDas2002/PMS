function formatDate(timestamp) {
    const date = new Date(timestamp);
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
    const dayOfMonth = date.getDate();
    const suffix = getSuffix(dayOfMonth);
  
    return formattedDate.replace(String(dayOfMonth), `${dayOfMonth}${suffix}`);
  }
  
  function getSuffix(day) {
    const suffixes = ['th', 'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th'];
    const specialCases = [11, 12, 13];
  
    if (specialCases.includes(day % 100)) {
      return 'th';
    } else {
      return suffixes[day % 10];
    }
  }
  
    console.log(formatDate(1680950277732));
  
    export default formatDate;