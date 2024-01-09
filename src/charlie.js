const charlie = [
  {
    description: "Option+C => Ctrl+C",
    type: "basic",
    from: {
      key_code: "c",
      modifiers: {
        mandatory: ["option"],
        optional: ["any"],
      },
    },
    to: [
      {
        key_code: "c",
        modifiers: ["left_control"],
      },
    ],
    conditions: [
      {
        type: "frontmost_application_unless",
        bundle_identifiers: [
          "^com\\.utmapp\\.UTM$",
          "^com\\.microsoft\\.rdc$",
          "^com\\.microsoft\\.rdc\\.mac$",
          "^com\\.microsoft\\.rdc\\.macos$",
          "^com\\.microsoft\\.rdc\\.osx\\.beta$",
          "^net\\.sf\\.cord$",
          "^com\\.thinomenon\\.RemoteDesktopConnection$",
          "^com\\.itap-mobile\\.qmote$",
          "^com\\.nulana\\.remotixmac$",
          "^com\\.p5sys\\.jump\\.mac\\.viewer$",
          "^com\\.p5sys\\.jump\\.mac\\.viewer\\.web$",
          "^com\\.teamviewer\\.TeamViewer$",
          "^com\\.vmware\\.horizon$",
          "^com\\.2X\\.Client\\.Mac$",
          "^com\\.vmware\\.fusion$",
          "^com\\.vmware\\.horizon$",
          "^com\\.vmware\\.view$",
          "^com\\.parallels\\.desktop$",
          "^com\\.parallels\\.vm$",
          "^com\\.parallels\\.desktop\\.console$",
          "^org\\.virtualbox\\.app\\.VirtualBoxVM$",
          "^com\\.citrix\\.XenAppViewer$",
          "^com\\.vmware\\.proxyApp\\.",
          "^com\\.parallels\\.winapp\\.",
          "^org\\.macports\\.X11$",
          "^com\\.apple\\.Terminal$",
          // "^com\\.googlecode\\.iterm2$",
          "^co\\.zeit\\.hyperterm$",
          "^co\\.zeit\\.hyper$",
          "^io\\.alacritty$",
          "^net\\.kovidgoyal\\.kitty$",
          "^tv\\.parsec\\.www$",
        ],
      },
    ],
  },
  {
    description: "Ctrl+Backspace => Alt+Backspace",
    type: "basic",
    from: {
      key_code: "delete_or_backspace",
      modifiers: {
        mandatory: ["control"],
        optional: ["any"],
      },
    },
    to: [
      {
        key_code: "delete_or_backspace",
        modifiers: ["left_option"],
      },
    ],
    conditions: [
      {
        type: "frontmost_application_unless",
        bundle_identifiers: [
          "^com\\.utmapp\\.UTM$",
          "^com\\.microsoft\\.rdc$",
          "^com\\.microsoft\\.rdc\\.mac$",
          "^com\\.microsoft\\.rdc\\.macos$",
          "^com\\.microsoft\\.rdc\\.osx\\.beta$",
          "^net\\.sf\\.cord$",
          "^com\\.thinomenon\\.RemoteDesktopConnection$",
          "^com\\.itap-mobile\\.qmote$",
          "^com\\.nulana\\.remotixmac$",
          "^com\\.p5sys\\.jump\\.mac\\.viewer$",
          "^com\\.p5sys\\.jump\\.mac\\.viewer\\.web$",
          "^com\\.teamviewer\\.TeamViewer$",
          "^com\\.vmware\\.horizon$",
          "^com\\.2X\\.Client\\.Mac$",
          "^com\\.vmware\\.fusion$",
          "^com\\.vmware\\.horizon$",
          "^com\\.vmware\\.view$",
          "^com\\.parallels\\.desktop$",
          "^com\\.parallels\\.vm$",
          "^com\\.parallels\\.desktop\\.console$",
          "^org\\.virtualbox\\.app\\.VirtualBoxVM$",
          "^com\\.citrix\\.XenAppViewer$",
          "^com\\.vmware\\.proxyApp\\.",
          "^com\\.parallels\\.winapp\\.",
          "^org\\.macports\\.X11$",
          "^com\\.apple\\.Terminal$",
          // "^com\\.googlecode\\.iterm2$",
          "^co\\.zeit\\.hyperterm$",
          "^co\\.zeit\\.hyper$",
          "^io\\.alacritty$",
          "^net\\.kovidgoyal\\.kitty$",
          "^tv\\.parsec\\.www$",
        ],
      },
    ],
  },
  {
    description: "F1,F2,F3,F4 => Ctrl+Arrows",
    type: "basic",
    from: {
      key_code: "f1",
    },
    to: [
      {
        key_code: "left_arrow",
        modifiers: ["left_control"],
      },
    ],
  },
  {
    description: "F1,F2,F3,F4 => Ctrl+Arrows",
    type: "basic",
    from: {
      key_code: "f2",
    },
    to: [
      {
        key_code: "right_arrow",
        modifiers: ["left_control"],
      },
    ],
  },
  {
    description: "F1,F2,F3,F4 => Ctrl+Arrows",
    type: "basic",
    from: {
      key_code: "f3",
    },
    to: [
      {
        key_code: "up_arrow",
        modifiers: ["left_control"],
      },
    ],
  },
  {
    description: "F1,F2,F3,F4 => Ctrl+Arrows",
    type: "basic",
    from: {
      key_code: "f4",
    },
    to: [
      {
        key_code: "down_arrow",
        modifiers: ["left_control"],
      },
    ],
  },
];

module.exports = charlie;
