import styled from "styled-components";

export const TweetCard = styled.li`
  position: relative;
  padding: 20px 20px 36px;
  width: 380px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  color: #ebd8ff;
  box-sizing: border-box;
`;

export const DecoreImg = styled.img`
  position: absolute;
  top: 28px;
  left: 36px;
`;

export const AvatarWrapper = styled.div`
  position: relative;
  margin-bottom: 26px;
  padding-top: 158px;
  margin-left: auto;
  margin-right: auto;
  width: 80px;
  height: 80px;
  border-radius: 50%;

  &::after {
    content: "";
    display: block;
    height: 8px;
    width: 380px;
    position: absolute;
    bottom: 36px;
    left: -150px;
    background: #ebd8ff;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
  }
`;

export const Avatar = styled.img`
  position: absolute;
  height: 62px;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

export const Ellipse = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  box-sizing: border-box;
  z-index: 100;
  background: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
`;

export const EllipseDark = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #5736a3;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  overflow: hidden;
`;

export const ContentWrapper = styled.div`
  text-align: center;

  &:nth-child(1) {
    margin-bottom: 16px;
  }
`;

export const Content = styled.div`
  font-weight: 500;
  font-size: 20px;
  text-transform: uppercase;

  &:nth-of-type(1) {
    margin-bottom: 16px;
  }
`;
