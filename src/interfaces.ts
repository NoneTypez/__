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
  [key: string]: { text: string; to: string }[];
  exchange: {
    text: string;
    to: string;
  }[];
  projects: {
    text: string;
    to: string;
  }[];
  scripts: {
    text: string;
    to: string;
  }[];
  other: {
    text: string;
    to: string;
  }[];
  table: never[];
}
