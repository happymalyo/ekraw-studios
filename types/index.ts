export type Menu = {
  label: string;
  link: string;
};
export type MenuIntl = {
  label: string;
  lang: string;
  countryCode: string;
};

export type Lang = "en" | "fr";

export type User = {
  username: string;
  email: string;
  avatar?: null;
  id: string;
  chatId: string;
  blocked?: string[];
};

export type Blog = {
  id: number;
  title: string;
  paragraph: string;
  image: string;
  author: {
    name: string;
    image: string;
    designation: string;
  };
  tags: string[];
  publishDate: string;
};
