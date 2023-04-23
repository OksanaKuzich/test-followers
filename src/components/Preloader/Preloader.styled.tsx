import styled from "styled-components";

export const Loader = styled.div`
  background: rgba(244, 244, 244, 0.82);
  bottom: 0;
  left: 0;
  overflow: hidden;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 99999;
`;

export const LoaderInner = styled.div`
  bottom: 0;
  height: 60px;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  width: 100px;
`;

export const LoaderLine = styled.div`
  border: 4px solid transparent;
  border-radius: 100%;
  box-sizing: border-box;
  height: 100px;
  left: 0;
  margin: 0 auto;
  position: absolute;
  right: 0;
  top: 0;
  width: 100px;
`;

export const LoaderLineWrap = styled.div`
  animation: spin 2000ms cubic-bezier(0.175, 0.885, 0.32, 1.275) infinite;
  box-sizing: border-box;
  height: 50px;
  left: 0;
  overflow: hidden;
  position: absolute;
  top: 0;
  transform-origin: 50% 100%;
  width: 100px;

  &:nth-child(1) {
    animation-delay: -50ms;
  }
  &:nth-child(2) {
    animation-delay: -100ms;
  }
  &:nth-child(3) {
    animation-delay: -150ms;
  }
  &:nth-child(4) {
    animation-delay: -200ms;
  }
  &:nth-child(5) {
    animation-delay: -250ms;
  }

  &:nth-child(1) ${LoaderLine} {
    border-color: hsl(0, 80%, 60%);
    height: 90px;
    width: 90px;
    top: 7px;
  }
  &:nth-child(2) ${LoaderLine} {
    border-color: hsl(60, 80%, 60%);
    height: 76px;
    width: 76px;
    top: 14px;
  }
  &:nth-child(3) ${LoaderLine} {
    border-color: hsl(120, 80%, 60%);
    height: 62px;
    width: 62px;
    top: 21px;
  }
  &:nth-child(4) ${LoaderLine} {
    border-color: hsl(180, 80%, 60%);
    height: 48px;
    width: 48px;
    top: 28px;
  }
  &:nth-child(5) ${LoaderLine} {
    border-color: hsl(240, 80%, 60%);
    height: 34px;
    width: 34px;
    top: 35px;
  }

  @keyframes spin {
    0%,
    15% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
