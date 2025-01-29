export interface IIcons {
  dashboard: string;
  exchange: string;
  projects: string;
  scripts: string;
  swap: string;
  other: string;
  table: string;
  log: string;
  search: string;
  arrow_up: string;
  arrow_down: string;
}

export interface IHeadersValues {
  id: number;
  profileName: string;
  email: string;
  twitter: string;
  discord: string;
  telegram: string;
  telephone: string;
  github: string;
  balance: string;
}

interface IRowData {
  id: number;
  profileName?: string;
  email?: string;
  twitter?: string;
  discord?: string;
  telegram?: string;
  telephone?: string;
  github?: string;
  balance: string;
}

export interface ITableComposition {
  data: IRowData[];
  checkedItems: Record<number, boolean>;
  onToggleItem: (id: number) => void;
}

export interface ISubMenus {
  [key: string]: { text: string; onclick: () => void }[];
  exchange: {
    text: string;
    onclick: () => void;
  }[];
  projects: {
    text: string;
    onclick: () => void;
  }[];
  scripts: {
    text: string;
    onclick: () => void;
  }[];
  other: {
    text: string;
    onclick: () => void;
  }[];
  table: never[];
}
