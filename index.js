const persons = [
  {
    name: "AshKeys",
    occupation: "Full Stack Depropeloper",
    blog: "ashokma.com",
  },
  {
    name: "Sojiro",
    occupation: "Web Depropeloper",
    blog: "ashokma.com",
  },
];

console.table(persons);

const filters = ["name", "occupation"];

const filteredPersons = persons.map((p) =>
  Object.keys(p)
    .filter((prop) => filters.includes(prop))
    .reduce((acc, prop) => ({ ...acc, [prop]: p[prop] }), {})
);

console.table(filteredPersons);
