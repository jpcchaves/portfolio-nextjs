export interface NavLinks {
  translateKey: string;
  path: string;
}

export const navbarLinks: NavLinks[] = [
  {
    translateKey: "home",
    path: "/",
  },
  {
    translateKey: "about",
    path: "/#about",
  },
  {
    translateKey: "skills",
    path: "/#skills",
  },
  {
    translateKey: "projects",
    path: "/#projects",
  },
  {
    translateKey: "contact",
    path: "/#contact",
  },
];
