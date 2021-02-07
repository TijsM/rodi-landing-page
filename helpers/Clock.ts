const timeFormatter = (time: number) => {
  return time < 10 ? "0" + time : time;
};

export const getFormattedTime = (time: Date) => {
  const hours = timeFormatter(time.getHours());
  const minutes = timeFormatter(time.getMinutes());
  const seconds = timeFormatter(time.getSeconds());

  return `${hours}:${minutes}:${seconds}`;
};
