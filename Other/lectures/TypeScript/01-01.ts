const peoples = [
  {
    name: 'tim',
    age: 20
  }, {
    name: 'alex',
    age: 22
  }
];
const sortedPeoples = peoples.sort((a, b) => a.name.localCompare(b.name));