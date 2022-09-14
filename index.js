chars = [
  {
    name: "A",
    height: "33",
    mass: "33",
  },
  {
    name: "B",
    height: "33",
    mass: "33",
  },
  {
    name: "C",
    height: "33",
    mass: "33",
  },
];

total_mass = chars.reduce((acc, ch) => {
  return acc + parseInt(ch.mass);
}, 0);

console.log(total_mass);
