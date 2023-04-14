import styled from "styled-components";

export const ButtonStyle = styled.button`
  margin-top: 26px;
  width: 196px;
  height: 50px;
  background: ${props =>
    props.children === "follow" ? " #ebd8ff" : "#5CD3A8"};
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  border: none;
  font-weight: 600;
  color: #373737;
  text-transform: uppercase;
  transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background: #fff;
  }
`;
