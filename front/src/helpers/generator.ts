export function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function genId(prefix: string) {
  return `${prefix}_${getRandomInt(1, 999999)}`
}
