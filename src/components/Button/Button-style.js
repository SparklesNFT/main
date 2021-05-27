import styled, { css } from "styled-components";

export const ButtonWrapper = styled.button`
  border-radius: 5px;
  border: 0;
  font-family: "Lato-bold";
  position: relative;
  text-transform: capitalize;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  outline: none;
  user-select: none;
  transition: all 0.15s linear;
  width: auto;
  height: 50px;
  padding: 3px 30px;
  ${({ sm, md, lg }) => {
    if (sm) {
      return css`
        width: 100px;
      `;
    }
    if (md) {
      return css`
        width: 200px;
      `;
    }
    if (lg) {
      return css`
        width: 300px;
      `;
    }
  }}
  ${({ primary }) =>
    primary &&
    css`
      background-color: ${({ theme }) => theme.button.primary.backGroundColor};
      color: ${({ theme }) => theme.button.primary.textColor};
      &:hover {
        background: ${({ theme }) => theme.button.primary.hover};
      }
      &:active {
        background: ${({ theme }) => theme.button.primary.active};
      }
    `}
  ${({ secondary }) =>
    secondary &&
    css`
      background-color: ${({ theme }) =>
        theme.button.secondary.backGroundColor};
      color: ${({ theme }) => theme.button.secondary.textColor};
      &:hover {
        background: ${({ theme }) => theme.button.secondary.hover};
      }
      &:active {
        background: ${({ theme }) => theme.button.secondary.active};
      }
    `}
`;
