export const COLORS = {
  default: {
    PRIMARY: "#FFF",
    SECONDARY: "#000",
    ICON_CIRCLE: "#FFF",
    TEXT: "#666",
    LAUREL: "#009366",
    SECRET_RANK_1: "red",
    SECRET_RANK_2: "fuchsia",
    SECRET_RANK_3: "blue",
    SECRET_RANK_TEXT: "fuchsia",
    NEXT_RANK_BAR: "#0366d6",
    S_RANK_BASE: "#FAD200",
    S_RANK_SHADOW: "#C8A090",
    S_RANK_TEXT: "#886000",
    A_RANK_BASE: "#B0B0B0",
    A_RANK_SHADOW: "#9090C0",
    A_RAKN_TEXT: "#505050",
    B_RANK_BASE: "#A18D66",
    B_RANK_SHADOW: "#816D96",
    B_RANK_TEXT: "#412D06",
    DEFAULT_RANK_BASE: "#777",
    DEFAULT_RANK_SHADOW: "#333",
    DEFAULT_RANK_TEXT: "#333",
  },
  gruvbox: {
    PRIMARY: "#282828",
    SECONDARY: "#ebdbb2",
    ICON_CIRCLE: "#ebdbb2",
    TEXT: "#98971a",
    LAUREL: "#689d6a",
    SECRET_RANK_1: "#fb4934",
    SECRET_RANK_2: "#d3869b",
    SECRET_RANK_3: "#458588",
    SECRET_RANK_TEXT: "#b16286",
    NEXT_RANK_BAR: "#fabd26",
    S_RANK_BASE: "#fabd2f",
    S_RANK_SHADOW: "#fabd2f",
    S_RANK_TEXT: "#322301",
    A_RANK_BASE: "#83a598",
    A_RANK_SHADOW: "#83a598",
    A_RAKN_TEXT: "#151e1a",
    B_RANK_BASE: "#d65d0e",
    B_RANK_SHADOW: "#d65d0e",
    B_RANK_TEXT: "#301503",
    DEFAULT_RANK_BASE: "#928374",
    DEFAULT_RANK_SHADOW: "#928374",
    DEFAULT_RANK_TEXT: "#282828",
  },
};

export interface Theme {
  PRIMARY: string;
  SECONDARY: string;
  ICON_CIRCLE: string;
  TEXT: string;
  LAUREL: string;
  SECRET_RANK_1: string;
  SECRET_RANK_2: string;
  SECRET_RANK_3: string;
  SECRET_RANK_TEXT: string;
  NEXT_RANK_BAR: string;
  S_RANK_BASE: string;
  S_RANK_SHADOW: string;
  S_RANK_TEXT: string;
  A_RANK_BASE: string;
  A_RANK_SHADOW: string;
  A_RAKN_TEXT: string;
  B_RANK_BASE: string;
  B_RANK_SHADOW: string;
  B_RANK_TEXT: string;
  DEFAULT_RANK_BASE: string;
  DEFAULT_RANK_SHADOW: string;
  DEFAULT_RANK_TEXT: string;
}