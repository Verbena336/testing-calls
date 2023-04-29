export const DATE_RANGE = {
  TODAY: new Date(),
  WEEK_AGO: new Date(),
  THREE_DAYS_AGO: new Date(),
  MONTH_AGO: new Date(),
  YEAR_AGO: new Date(),
};

DATE_RANGE.WEEK_AGO.setDate(DATE_RANGE.WEEK_AGO.getDate() - 7);
DATE_RANGE.THREE_DAYS_AGO.setDate(DATE_RANGE.THREE_DAYS_AGO.getDate() - 3);
DATE_RANGE.MONTH_AGO.setMonth(DATE_RANGE.MONTH_AGO.getMonth() - 1);
DATE_RANGE.YEAR_AGO.setFullYear(DATE_RANGE.YEAR_AGO.getFullYear() - 1);
