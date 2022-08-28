import styled from "styled-components";

const Button = styled.button`
  background: ${(props) => (props.primary ? props.theme.ten : "none")};
  color: ${(props) => (props.primary ? props.theme.sixty : props.theme.ten)};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: ${(props) => (props.primary ? props.theme.ten : "none")};
  border-radius: 3px;
  cursor: pointer;
`;

export default Button;
