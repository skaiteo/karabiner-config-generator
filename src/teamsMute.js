const teamsMute = [
  {
    description: "Right Shift + Slash => Ctrl+Shift+M",
    type: "basic",
    from: {
      simultaneous: [
        {
          key_code: "right_shift",
        },
        {
          key_code: "slash",
        },
      ],
      simultaneous_options: {
        detect_key_down_uninterruptedly: true,
      },
    },
    to: [
      {
        key_code: "m",
        modifiers: ["command", "shift"],
        repeat: false,
      },
    ],
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
      bundle_identifiers: ["^com\\.microsoft\\.teams2$"],
    },
  ],
}));
