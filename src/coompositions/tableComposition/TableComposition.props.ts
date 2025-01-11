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
}
