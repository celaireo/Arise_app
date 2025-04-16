export interface MenuItem {
  title: string;
  icon: JSX.Element;
  content: string;
  isFavorites?: boolean;
}

export interface MenuSection {
  section: string;
  items: MenuItem[];
}

export interface Notes {
  [key: string]: string;
}