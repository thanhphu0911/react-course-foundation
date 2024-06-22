let input = [
  {
    id: "sign-up-form",
    name: "Sign-Up Form",
    category: "HTML",
  },
  {
    id: "debounce",
    name: "Debounce",
    category: "JavaScript",
  },
];

let ouput = {
  HTML: [{ id: "sign-up-form", name: "Sign-Up Form" }],
  JavaScript: [
    {
      id: "debounce",
      name: "Debounce",
    },
  ],
};

function convert(input) {
  let output = {};

  input.forEach((item) => {
    const { id, name, category } = item;
    if (!output[category]) {
      output[categoy] = [];
    }

    output[category].push({ id, name });
  });
  return output;
}

console.log(convert(input));
