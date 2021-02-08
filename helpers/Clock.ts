const timeFormatter = (time: number) => {
  return time < 10 ? "0" + time : time;
};

export const getFormattedTime = (time: Date) => {
  const hours = timeFormatter(time.getHours());
  const minutes = timeFormatter(time.getMinutes());
  const seconds = timeFormatter(time.getSeconds());

  return `${hours}:${minutes}:${seconds}`;
};

export const getEllapsedTime = (startTime: Date, currentTime: Date) => {
  if (!startTime) {
    return "00:00:00";
  }

  const hours = timeFormatter(
    currentTime.getHours() - startTime.getHours()
  );
  const minutes = timeFormatter(
    new Date(currentTime.getTime() - startTime.getTime()).getMinutes()
  );
  const seconds = timeFormatter(
    new Date(currentTime.getTime() - startTime.getTime()).getSeconds()
  );

  return `${hours}:${minutes}:${seconds}`;
};
