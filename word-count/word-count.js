//
// This is only a SKELETON file for the 'Word Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const countWords = (words) => {
  const matches = words.match(/[\w\d\’\'-]+/gi);

  const reducer = (array) => { // array to set > set.forEach > map.set
    const count = new Map();
    const values = new Set(array);
    values.forEach((element) => {
      count.set(element, array.filter((arrayElement) => arrayElement === element).length);
    });
    return count;
  }

  const counts = reducer(matches)
  console.log('=>>>>>>>', counts);

  return counts
};
