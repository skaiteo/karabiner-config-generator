const fs = require("fs");

const windows = require("./windows");
const charlie = require("./charlie");
const teamsMute = require("./teamsMute");

const manipulators = [...windows, ...charlie]
  .map(({ conditions = [], ...rest }) => ({
    conditions: [
      ...conditions,
      {
        type: "device_unless",
        identifiers: [
          {
            is_built_in_keyboard: true,
          },
        ],
      },
    ],
    ...rest,
  }))
  .concat(teamsMute)
  .map(({ description, ...rest }) => ({ ...rest }));

const mods = {
  title: "All Combined Shortcuts",
  rules: [
    {
      description: "Generated Shortcuts",
      manipulators,
    },
  ],
};

fs.writeFile(
  "assets/complex_modifications/generated.json",
  JSON.stringify(mods, null, 4),
  (err) => {
    if (err) {
      console.error(err);
    }
    // file written successfully
  }
);
