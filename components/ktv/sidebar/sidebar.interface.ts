interface Childs {
  name: string;
  type: string;
  id?: number;
  url?: string;
  info?: string;
}

export interface MenuInterface {
  name: string;
  type: string;
  id?: number;
  icon?: string;
  childs?: Childs[];
  url?: string;
}
