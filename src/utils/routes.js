import { lazy } from "react";

const Example = lazy(() => import("../pages/Components"));
const Home = lazy(() => import("../pages/Home"));

export const routes = [
  {
    path: "/",
    name: "Home",
    exact: true,
    secret: false,
    component: Home,
    menu: true,
    icon: "iconName",
  },
  {
    path: "/component-page",
    name: "EXamPLEs",
    exact: true,
    secret: false,
    component: Example,
    menu: true,
    icon: "iconName",
    // children: [
    //   {
    //     path: "/example-page/1",
    //     name: "EXamPLEs-1",
    //     exact: true,
    //     secret: false,
    //     component: Example,
    //     menu: true,
    //     icon: "iconName",
    //   },
    //   {
    //     path: "/example-page/2",
    //     name: "EXamPLEs-2",
    //     exact: true,
    //     secret: false,
    //     component: Example,
    //     menu: true,
    //     icon: "iconName",
    //   },
    // ],
  },
];
