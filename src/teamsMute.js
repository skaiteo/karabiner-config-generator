const teamsMute = [
  {
    description: "Double Right Shift => Ctrl+Shift+M",
    type: "basic",
    from: {
      key_code: "right_shift",
      modifiers: {
        optional: ["any"],
      },
    },
    to: [
      {
        key_code: "m",
        modifiers: ["command", "shift"],
      },
    ],
    conditions: [
      {
        type: "variable_if",
        name: "right_shift pressed",
        value: 1,
      },
    ],
  },
  {
    description: "Double Right Shift => Ctrl+Shift+M",
    type: "basic",
    from: {
      key_code: "right_shift",
      modifiers: {
        optional: ["any"],
      },
    },
    to: [
      {
        set_variable: {
          name: "right_shift pressed",
          value: 1,
        },
      },
      {
        key_code: "right_shift",
      },
    ],
    to_delayed_action: {
      to_if_invoked: [
        {
          set_variable: {
            name: "right_shift pressed",
            value: 0,
          },
        },
      ],
      to_if_canceled: [
        {
          set_variable: {
            name: "right_shift pressed",
            value: 0,
          },
        },
      ],
    },
  },
  {
    description: "MacBook F5 => Ctrl+Shift+M (in MS Teams)",
    type: "basic",
    from: {
      key_code: "f5",
    },
    to: [
      {
        key_code: "m",
        modifiers: ["left_command", "left_shift"],
      },
    ],
    conditions: [
      {
        type: "device_if",
        identifiers: [
          {
            is_built_in_keyboard: true,
          },
        ],
      },
    ],
  },
];

module.exports = teamsMute.map(({ conditions = [], ...rest }) => ({
  ...rest,
  conditions: [
    ...conditions,
    {
      type: "frontmost_application_if",
      bundle_identifiers: ["^com\\.microsoft\\.teams$"],
    },
  ],
}));
