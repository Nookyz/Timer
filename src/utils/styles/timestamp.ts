export const formatMinutes = (number: number) => {
  const minutes = Math.floor(number / 60);
  return minutes < 10 ? `0${minutes}` : minutes.toString();
};

export const formatSeconds = (number: number) => {
  const minutes = Math.floor(number / 60);
  const seconds = number - minutes * 60;
  return seconds < 10 ? `0${seconds}` : seconds.toString();
};
