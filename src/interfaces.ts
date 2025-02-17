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

export interface IWalletsValues {
  id: number;
  address: string;
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

export interface ITableHeaders {
  isAllChecked: boolean;
  onToggleAll: () => void;
  onSort: (key: keyof IHeadersValues, ascending: boolean) => void;
}

export interface IWalletList {
  data: { id: number; address: string; balance: string }[];
  checkedItems: Record<number, boolean>;
  onToggleItem: (id: number) => void;
}

export interface IWalletsHeaders {
  isAllChecked: boolean;
  onToggleAll: () => void;
  onSort: (key: keyof IWalletList, ascending: boolean) => void;
}
