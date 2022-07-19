const obj1 = {
  name: 'John',
  age: 21,
  town: 'London',
  hasCar: true,
};

// ciklas per objekata
// for (key in obj) { value = obj[key] }
const valuesArr = [];
const keysAndValues = [];
for (const key in obj1) {
  const value = obj1[key];
  // console.log('key ===', key);
  console.log('value ===', value);
  valuesArr.push(value);
  keysAndValues.push([key, value]);
}
console.log('valuesArr ===', valuesArr);
console.log('keysAndValues ===', keysAndValues);
