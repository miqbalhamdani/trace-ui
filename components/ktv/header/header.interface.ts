export interface ApplicationList {
  code: string;
  name: string;
  description: string;
  icon: string;
  url: string;
}

export interface UserGroups {
  group_name: string;
  partner_name: string;
  current_gorup: string;
}

export interface Navigations {
  name: string;
  icon: string;
  url: string;
  user_group?: UserGroups[];
}
