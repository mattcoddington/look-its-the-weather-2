import moment from "moment";

export const dayOfWeek = (date) => {
  const isToday = moment(date).isSame(moment().startOf("day", "day"));
  return isToday ? "Today" : moment(date).format("dddd");
};
