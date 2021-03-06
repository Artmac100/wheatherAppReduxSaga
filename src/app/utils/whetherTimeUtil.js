export const wheatherIcon = (stateWheather, intTime) => {
  const d = new Date(intTime);
  switch (true) {
    case stateWheather >= 200 && stateWheather < 300:
      return "icon-clouds-flash-inv";
    case stateWheather >= 300 && stateWheather < 600:
      return "icon-rain-inv";
    case stateWheather >= 600 && stateWheather < 700:
      return "fa fa-snowflake-o";
    case stateWheather >= 700 && stateWheather < 800:
      return "icon-mist";
    case stateWheather === 800:
      return d.getHours() < 19 && d.getHours() > 4 ? "icon-sun-inv" : "icon-moon-inv";
    case stateWheather === 801:
      return d.getHours() < 19 && d.getHours() > 4 ? "icon-cloud-sun-inv" : "icon-cloud-moon-inv";
    case stateWheather > 801 && stateWheather < 900:
      return "icon-cloud-inv";
    default:
      return "";
  }
};
