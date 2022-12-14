const windows = [
  {
    description: "Ctrl+C => Cmd+C (Copy)",
    type: "basic",
    from: {
      key_code: "c",
      modifiers: {
        mandatory: ["control"],
        optional: ["any"],
      },
    },
    to: [
      {
        key_code: "c",
        modifiers: ["left_command"],
      },
    ],
    conditions: [
      {
        type: "frontmost_application_unless",
        bundle_identifiers: [
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
          "^com\\.googlecode\\.iterm2$",
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
    description: "Ctrl+V => Cmd+V (Paste)",
    type: "basic",
    from: {
      key_code: "v",
      modifiers: {
        mandatory: ["control"],
        optional: ["any"],
      },
    },
    to: [
      {
        key_code: "v",
        modifiers: ["left_command"],
      },
    ],
    conditions: [
      {
        type: "frontmost_application_unless",
        bundle_identifiers: [
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
          "^com\\.googlecode\\.iterm2$",
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
    description: "Ctrl+X => Cmd+X (Cut)",
    type: "basic",
    from: {
      key_code: "x",
      modifiers: {
        mandatory: ["control"],
        optional: ["any"],
      },
    },
    to: [
      {
        key_code: "x",
        modifiers: ["left_command"],
      },
    ],
    conditions: [
      {
        type: "frontmost_application_unless",
        bundle_identifiers: [
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
          "^com\\.googlecode\\.iterm2$",
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
    description: "Ctrl+Z => Cmd+Z (Undo)",
    conditions: [
      {
        bundle_identifiers: [
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
          "^com\\.googlecode\\.iterm2$",
          "^co\\.zeit\\.hyperterm$",
          "^co\\.zeit\\.hyper$",
          "^io\\.alacritty$",
          "^net\\.kovidgoyal\\.kitty$",
          "^tv\\.parsec\\.www$",
        ],
        type: "frontmost_application_unless",
      },
    ],
    from: {
      key_code: "z",
      modifiers: {
        mandatory: ["control"],
        optional: ["any"],
      },
    },
    to: [
      {
        key_code: "z",
        modifiers: ["left_command"],
      },
    ],
    type: "basic",
  },
  {
    description: "Ctrl+A => Cmd+A (Select all)",
    conditions: [
      {
        bundle_identifiers: [
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
          "^com\\.googlecode\\.iterm2$",
          "^co\\.zeit\\.hyperterm$",
          "^co\\.zeit\\.hyper$",
          "^io\\.alacritty$",
          "^net\\.kovidgoyal\\.kitty$",
          "^tv\\.parsec\\.www$",
        ],
        type: "frontmost_application_unless",
      },
    ],
    from: {
      key_code: "a",
      modifiers: {
        mandatory: ["control"],
        optional: ["any"],
      },
    },
    to: [
      {
        key_code: "a",
        modifiers: ["left_command"],
      },
    ],
    type: "basic",
  },
  {
    description: "Ctrl+S => Cmd+S (Save)",
    conditions: [
      {
        bundle_identifiers: [
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
          "^com\\.googlecode\\.iterm2$",
          "^co\\.zeit\\.hyperterm$",
          "^co\\.zeit\\.hyper$",
          "^io\\.alacritty$",
          "^net\\.kovidgoyal\\.kitty$",
          "^tv\\.parsec\\.www$",
        ],
        type: "frontmost_application_unless",
      },
    ],
    from: {
      key_code: "s",
      modifiers: {
        mandatory: ["control"],
        optional: ["any"],
      },
    },
    to: [
      {
        key_code: "s",
        modifiers: ["left_command"],
      },
    ],
    type: "basic",
  },
  {
    description: "Ctrl+N => Cmd+N (New)",
    conditions: [
      {
        bundle_identifiers: [
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
          "^com\\.googlecode\\.iterm2$",
          "^co\\.zeit\\.hyperterm$",
          "^co\\.zeit\\.hyper$",
          "^io\\.alacritty$",
          "^net\\.kovidgoyal\\.kitty$",
          "^tv\\.parsec\\.www$",
        ],
        type: "frontmost_application_unless",
      },
    ],
    from: {
      key_code: "n",
      modifiers: {
        mandatory: ["control"],
        optional: ["any"],
      },
    },
    to: [
      {
        key_code: "n",
        modifiers: ["left_command"],
      },
    ],
    type: "basic",
  },
  {
    description: "Ctrl+F => Cmd+F (Find)",
    conditions: [
      {
        bundle_identifiers: [
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
          "^com\\.googlecode\\.iterm2$",
          "^co\\.zeit\\.hyperterm$",
          "^co\\.zeit\\.hyper$",
          "^io\\.alacritty$",
          "^net\\.kovidgoyal\\.kitty$",
          "^tv\\.parsec\\.www$",
        ],
        type: "frontmost_application_unless",
      },
    ],
    from: {
      key_code: "f",
      modifiers: {
        mandatory: ["control"],
        optional: ["any"],
      },
    },
    to: [
      {
        key_code: "f",
        modifiers: ["left_command"],
      },
    ],
    type: "basic",
  },
  {
    description: "Ctrl+G => Cmd+G (Find Next)",
    conditions: [
      {
        bundle_identifiers: [
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
          "^com\\.googlecode\\.iterm2$",
          "^co\\.zeit\\.hyperterm$",
          "^co\\.zeit\\.hyper$",
          "^io\\.alacritty$",
          "^net\\.kovidgoyal\\.kitty$",
          "^tv\\.parsec\\.www$",
        ],
        type: "frontmost_application_unless",
      },
    ],
    from: {
      key_code: "g",
      modifiers: {
        mandatory: ["control"],
        optional: ["any"],
      },
    },
    to: [
      {
        key_code: "g",
        modifiers: ["left_command"],
      },
    ],
    type: "basic",
  },
  {
    description: "Ctrl+W => Cmd+W (Close)",
    conditions: [
      {
        bundle_identifiers: [
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
          "^com\\.googlecode\\.iterm2$",
          "^co\\.zeit\\.hyperterm$",
          "^co\\.zeit\\.hyper$",
          "^io\\.alacritty$",
          "^net\\.kovidgoyal\\.kitty$",
          "^tv\\.parsec\\.www$",
        ],
        type: "frontmost_application_unless",
      },
    ],
    from: {
      key_code: "w",
      modifiers: {
        mandatory: ["control"],
        optional: ["any"],
      },
    },
    to: [
      {
        key_code: "w",
        modifiers: ["left_command"],
      },
    ],
    type: "basic",
  },
  {
    description: "Home => Cmd+Left arrow (Move cursor to beginning of line)",
    conditions: [
      {
        bundle_identifiers: [
          "^org\\.macports\\.X11$",
          "^com\\.apple\\.Terminal$",
          "^com\\.googlecode\\.iterm2$",
          "^co\\.zeit\\.hyper$",
          "^org\\.virtualbox\\.app\\.VirtualBoxVM$",
          "^com\\.microsoft\\.rdc\\.macos$",
          "^tv\\.parsec\\.www$",
        ],
        type: "frontmost_application_unless",
      },
    ],
    from: {
      key_code: "home",
    },
    to: [
      {
        key_code: "left_arrow",
        modifiers: ["command"],
      },
    ],
    type: "basic",
  },
  {
    description:
      "Shift+Home => Cmd+Shift+Left arrow (Move cursor to beginning of line with selection)",
    conditions: [
      {
        bundle_identifiers: [
          "^org\\.macports\\.X11$",
          "^com\\.apple\\.Terminal$",
          "^com\\.googlecode\\.iterm2$",
          "^co\\.zeit\\.hyper$",
          "^org\\.virtualbox\\.app\\.VirtualBoxVM$",
          "^com\\.microsoft\\.rdc\\.macos$",
          "^tv\\.parsec\\.www$",
        ],
        type: "frontmost_application_unless",
      },
    ],
    from: {
      key_code: "home",
      modifiers: {
        mandatory: ["shift"],
      },
    },
    to: [
      {
        key_code: "left_arrow",
        modifiers: ["command", "shift"],
      },
    ],
    type: "basic",
  },
  {
    description:
      "Ctrl+Home, Ctrl+Shift+Home => Cmd+Up arrow, Cmd+Shift+Up arrow (Move cursor to beginning of file with and without selection)",
    conditions: [
      {
        bundle_identifiers: [
          "^org\\.macports\\.X11$",
          "^com\\.apple\\.Terminal$",
          "^com\\.googlecode\\.iterm2$",
          "^co\\.zeit\\.hyper$",
          "^org\\.virtualbox\\.app\\.VirtualBoxVM$",
          "^com\\.microsoft\\.rdc\\.macos$",
          "^tv\\.parsec\\.www$",
        ],
        type: "frontmost_application_unless",
      },
    ],
    from: {
      key_code: "home",
      modifiers: {
        mandatory: ["control"],
        optional: ["shift"],
      },
    },
    to: [
      {
        key_code: "up_arrow",
        modifiers: ["command"],
      },
    ],
    type: "basic",
  },
  {
    description: "End => Cmd+Right arrow (Move cursor to end of line)",
    conditions: [
      {
        bundle_identifiers: [
          "^org\\.macports\\.X11$",
          "^com\\.apple\\.Terminal$",
          "^com\\.googlecode\\.iterm2$",
          "^co\\.zeit\\.hyper$",
          "^org\\.virtualbox\\.app\\.VirtualBoxVM$",
          "^com\\.microsoft\\.rdc\\.macos$",
          "^tv\\.parsec\\.www$",
        ],
        type: "frontmost_application_unless",
      },
    ],
    from: {
      key_code: "end",
    },
    to: [
      {
        key_code: "right_arrow",
        modifiers: ["command"],
      },
    ],
    type: "basic",
  },
  {
    description:
      "Shift+End => Cmd+Shift+Right arrow (Move cursor to end of line with selection)",
    conditions: [
      {
        bundle_identifiers: [
          "^org\\.macports\\.X11$",
          "^com\\.apple\\.Terminal$",
          "^com\\.googlecode\\.iterm2$",
          "^co\\.zeit\\.hyper$",
          "^org\\.virtualbox\\.app\\.VirtualBoxVM$",
          "^com\\.microsoft\\.rdc\\.macos$",
          "^tv\\.parsec\\.www$",
        ],
        type: "frontmost_application_unless",
      },
    ],
    from: {
      key_code: "end",
      modifiers: {
        mandatory: ["shift"],
      },
    },
    to: [
      {
        key_code: "right_arrow",
        modifiers: ["command", "shift"],
      },
    ],
    type: "basic",
  },
  {
    description:
      "Ctrl+End, Ctrl+Shift+End => Cmd+down arrow, Cmd+Shift+down arrow (Move cursor to end of file with and without selection)",
    conditions: [
      {
        bundle_identifiers: [
          "^org\\.macports\\.X11$",
          "^com\\.apple\\.Terminal$",
          "^com\\.googlecode\\.iterm2$",
          "^co\\.zeit\\.hyper$",
          "^org\\.virtualbox\\.app\\.VirtualBoxVM$",
          "^com\\.microsoft\\.rdc\\.macos$",
          "^tv\\.parsec\\.www$",
        ],
        type: "frontmost_application_unless",
      },
    ],
    from: {
      key_code: "end",
      modifiers: {
        mandatory: ["control"],
        optional: ["shift"],
      },
    },
    to: [
      {
        key_code: "down_arrow",
        modifiers: ["command"],
      },
    ],
    type: "basic",
  },
  {
    description: "Ctrl+T => Cmd+T (New tab)",
    conditions: [
      {
        bundle_identifiers: [
          "^org\\.macports\\.X11$",
          "^com\\.apple\\.Terminal$",
          "^com\\.googlecode\\.iterm2$",
          "^co\\.zeit\\.hyper$",
          "^org\\.virtualbox\\.app\\.VirtualBoxVM$",
          "^com\\.microsoft\\.rdc\\.macos$",
          "^tv\\.parsec\\.www$",
        ],
        type: "frontmost_application_unless",
      },
    ],
    from: {
      key_code: "t",
      modifiers: {
        mandatory: ["control"],
        optional: ["any"],
      },
    },
    to: [
      {
        key_code: "t",
        modifiers: ["command"],
      },
    ],
    type: "basic",
  },
  {
    description: "Ctrl+L => Cmd+L (Open url location) (Only in browsers)",
    conditions: [
      {
        bundle_identifiers: [
          "^org\\.mozilla\\.firefox$",
          "^org\\.mozilla\\.nightly$",
          "^com\\.microsoft\\.Edge",
          "^com\\.google\\.Chrome$",
          "^com\\.brave\\.Browser$",
          "^com\\.apple\\.Safari$",
        ],
        type: "frontmost_application_if",
      },
    ],
    from: {
      key_code: "l",
      modifiers: {
        mandatory: ["control"],
        optional: ["any"],
      },
    },
    to: [
      {
        key_code: "l",
        modifiers: ["left_command"],
      },
    ],
    type: "basic",
  },
  {
    description: "Ctrl+R => Cmd+R (Reload) (Only in browsers)",
    conditions: [
      {
        bundle_identifiers: [
          "^org\\.mozilla\\.firefox$",
          "^org\\.mozilla\\.nightly$",
          "^com\\.microsoft\\.Edge",
          "^com\\.google\\.Chrome$",
          "^com\\.brave\\.Browser$",
          "^com\\.apple\\.Safari$",
        ],
        type: "frontmost_application_if",
      },
    ],
    from: {
      key_code: "r",
      modifiers: {
        mandatory: ["control"],
        optional: ["any"],
      },
    },
    to: [
      {
        key_code: "r",
        modifiers: ["left_command"],
      },
    ],
    type: "basic",
  },
  {
    description: "F5 => Cmd+r (Reload)",
    conditions: [
      {
        bundle_identifiers: [
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
          "^com\\.googlecode\\.iterm2$",
          "^co\\.zeit\\.hyperterm$",
          "^co\\.zeit\\.hyper$",
          "^io\\.alacritty$",
          "^net\\.kovidgoyal\\.kitty$",
          "^tv\\.parsec\\.www$",
        ],
        type: "frontmost_application_unless",
      },
    ],
    from: {
      key_code: "f5",
      modifiers: {
        optional: ["any"],
      },
    },
    to: [
      {
        key_code: "r",
        modifiers: ["left_command"],
      },
    ],
    type: "basic",
  },
  {
    description:
      "Ctrl+(Shift)+Right/left arrow => Alt+(Shift)+Right/left arrow (Move cursor one word with selection and without selection)",
    conditions: [
      {
        bundle_identifiers: [
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
          "^com\\.googlecode\\.iterm2$",
          "^co\\.zeit\\.hyperterm$",
          "^co\\.zeit\\.hyper$",
          "^io\\.alacritty$",
          "^net\\.kovidgoyal\\.kitty$",
          "^tv\\.parsec\\.www$",
        ],
        type: "frontmost_application_unless",
      },
    ],
    from: {
      key_code: "left_arrow",
      modifiers: {
        mandatory: ["control"],
        optional: ["shift"],
      },
    },
    to: [
      {
        key_code: "left_arrow",
        modifiers: ["left_option"],
      },
    ],
    type: "basic",
  },
  {
    description:
      "Ctrl+(Shift)+Right/left arrow => Alt+(Shift)+Right/left arrow (Move cursor one word with selection and without selection)",
    conditions: [
      {
        bundle_identifiers: [
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
          "^com\\.googlecode\\.iterm2$",
          "^co\\.zeit\\.hyperterm$",
          "^co\\.zeit\\.hyper$",
          "^io\\.alacritty$",
          "^net\\.kovidgoyal\\.kitty$",
          "^tv\\.parsec\\.www$",
        ],
        type: "frontmost_application_unless",
      },
    ],
    from: {
      key_code: "right_arrow",
      modifiers: {
        mandatory: ["control"],
        optional: ["shift"],
      },
    },
    to: [
      {
        key_code: "right_arrow",
        modifiers: ["left_option"],
      },
    ],
    type: "basic",
  },
  {
    description: "Ctrl+Up/down arrow => Up/down arrow (Move cursor up/down)",
    type: "basic",
    from: {
      key_code: "up_arrow",
      modifiers: {
        mandatory: ["control"],
        optional: ["shift"],
      },
    },
    to: [
      {
        key_code: "up_arrow",
      },
    ],
    conditions: [
      {
        type: "frontmost_application_unless",
        bundle_identifiers: [
          "^com\\.microsoft\\.rdc$",
          "^com\\.microsoft\\.rdc\\.",
          "^net\\.sf\\.cord$",
          "^com\\.thinomenon\\.RemoteDesktopConnection$",
          "^com\\.itap-mobile\\.qmote$",
          "^com\\.nulana\\.remotixmac$",
          "^com\\.p5sys\\.jump\\.mac\\.viewer$",
          "^com\\.p5sys\\.jump\\.mac\\.viewer\\.",
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
          "^com\\.googlecode\\.iterm2$",
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
    description: "Ctrl+Up/down arrow => Up/down arrow (Move cursor up/down)",
    type: "basic",
    from: {
      key_code: "down_arrow",
      modifiers: {
        mandatory: ["control"],
        optional: ["shift"],
      },
    },
    to: [
      {
        key_code: "down_arrow",
        modifiers: [],
      },
    ],
    conditions: [
      {
        type: "frontmost_application_unless",
        bundle_identifiers: [
          "^com\\.microsoft\\.rdc$",
          "^com\\.microsoft\\.rdc\\.",
          "^net\\.sf\\.cord$",
          "^com\\.thinomenon\\.RemoteDesktopConnection$",
          "^com\\.itap-mobile\\.qmote$",
          "^com\\.nulana\\.remotixmac$",
          "^com\\.p5sys\\.jump\\.mac\\.viewer$",
          "^com\\.p5sys\\.jump\\.mac\\.viewer\\.",
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
          "^com\\.googlecode\\.iterm2$",
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
    description: "Ctrl+Esc => Open Launchpad",
    conditions: [
      {
        bundle_identifiers: [
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
          "^tv\\.parsec\\.www$",
        ],
        type: "frontmost_application_unless",
      },
    ],
    from: {
      key_code: "escape",
      modifiers: {
        mandatory: ["control"],
      },
    },
    to: [
      {
        key_code: "launchpad",
        modifiers: [],
      },
    ],
    type: "basic",
  },
  {
    description: "Ctrl+Shift+Esc => Open Activity Monitor",
    conditions: [
      {
        bundle_identifiers: [
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
          "^tv\\.parsec\\.www$",
        ],
        type: "frontmost_application_unless",
      },
    ],
    from: {
      key_code: "escape",
      modifiers: {
        mandatory: ["control", "shift"],
      },
    },
    to: [
      {
        shell_command: "open -a 'Activity Monitor.app'",
      },
    ],
    type: "basic",
  },
  {
    description: "Return => Cmd+o (Open) (Only in Finder)",
    type: "basic",
    from: {
      key_code: "return_or_enter",
      modifiers: {
        optional: ["any"],
      },
    },
    to: [
      {
        key_code: "o",
        modifiers: ["right_command"],
      },
    ],
    conditions: [
      {
        type: "frontmost_application_if",
        bundle_identifiers: ["^com.apple.finder"],
      },
    ],
  },
  {
    description: "Delete => Cmd+backspace (Delete) (Only in Finder)",
    type: "basic",
    from: {
      key_code: "delete_forward",
      modifiers: {
        optional: ["any"],
      },
    },
    to: [
      {
        key_code: "delete_or_backspace",
        modifiers: ["left_command"],
      },
    ],
    conditions: [
      {
        type: "frontmost_application_if",
        bundle_identifiers: ["^com.apple.finder"],
      },
    ],
  },
  {
    description: "Backspace => Cmd+up (Go back) (Only in Finder)",
    type: "basic",
    from: {
      key_code: "delete_or_backspace",
    },
    to: [
      {
        key_code: "up_arrow",
        modifiers: ["left_command"],
      },
    ],
    conditions: [
      {
        type: "frontmost_application_if",
        bundle_identifiers: ["^com.apple.finder"],
      },
    ],
  },
];

module.exports = windows;
