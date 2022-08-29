import styled from "styled-components";

const Button = styled.button`
  background: ${(props) => (props.primary ? props.theme.thirty : "none")};
  color: ${(props) => (props.primary ? props.theme.sixty : props.theme.thirty)};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-color: ${(props) => (props.primary ? props.theme.ten : "none")};
  border-style: none;
  box-shadow: ${(props) => (props.primary ? "2px 2px 2px black" : "none")};
  border-radius: 0px;
  cursor: pointer;
`;

export default Button;
