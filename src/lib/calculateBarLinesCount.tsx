export const calculateBarLinesCount = (age: number) => {
  let count = -1;
  for (let i = 0; i < age; i += 5) {
    count++;
  }
  return count;
};
