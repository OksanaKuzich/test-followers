import styled from "styled-components";

export const ContentWrapper = styled.div`
  padding-top: 50px;
  text-align: center;
`;

export const HomeList = styled.ul`
  padding-top: 100px;
  display: flex;
  justify-content: center;
`;

export const HomeTitle = styled.h1`
  margin-bottom: 30px;
`;

export const HomeAvatar = styled.div`
  margin: 50px auto 20px;
  animation: animate125 3000ms infinite 1000ms;
  display: flex;
  justify-content: center;

  @keyframes animate125 {
    0% {
      transform: scale(1);
    }

    50% {
      transform: scale(1.25);
    }

    100% {
      transform: scale(1);
    }
  }
`;
