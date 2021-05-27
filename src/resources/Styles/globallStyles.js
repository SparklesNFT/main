import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

body{
    background:${({ theme }) => theme.backGroundColor};
    color:${({ theme }) => theme.text};
    transition :all 0.25s ease;
}
h1{
    color:${({ theme }) => theme.h1};
}
h2{
    color:${({ theme }) => theme.h2};
}
h3{
    color:${({ theme }) => theme.h3};
}
h4{
    color:${({ theme }) => theme.h4};
}
h5{
    color:${({ theme }) => theme.h5};
}
h6{
    color:${({ theme }) => theme.h6};
}
a{
    color:${({ theme }) => theme.a};
    &:hover{
        color:${({ theme }) => theme.aVisited};
    }
    &:visited{
        color:${({ theme }) => theme.aVisited};
    }
}

`;

export const lightTheme = {
  backGroundColor: "#ffffff",
  h1: "#333333",
  h2: "#3a3a3a",
  h3: "#3a3a3a",
  h4: "#3a3a3a",
  h5: "#3a3a3a",
  h6: "#4d4d4d",
  text: "#4d4d4d",
  a: "#0000f0",
  aVisited: "#1a0057",
  button: {
    primary: {
      backGroundColor: "#CE8FFF",
      textColor: "white",
      hover: "#B85CFF",
      active: "#AF47FF",
    },
    secondary: {
      backGroundColor: "#EBEDF0",
      textColor: "black",
      hover: "#99A4B2",
      active: "#4F5A68",
    },
    warning: "gold",
    error: "red",
    success: "green",
  },
};

export const darkTheme = {
  backGroundColor: "#1A1E23",
  h1: "#E2E5E9",
  h2: "#E2E5E9",
  h3: "#E2E5E9",
  h4: "#E2E5E9",
  h5: "#E2E5E9",
  h6: "#E2E5E9",
  text: "#E2E5E9",
  a: "#15ABFF",
  aVisited: "#3d00cc",
  button: {
    primary: {
      backGroundColor: "#A229FF",
      textColor: "white",
      hover: "#8B00F5",
      active: "#7F00E0",
    },
    secondary: {
      backGroundColor: "#4F5A68",
      textColor: "white",
      hover: "#485360",
      active: "#424B57",
    },
    warning: "gold",
    error: "red",
    success: "green",
  },
};
