import styled from "styled-components";

const Button = styled.button`
  background: ${(props) => (props.primary ? props.theme.thirty : "none")};
  color: ${(props) => (props.primary ? props.theme.sixty : props.theme.thirty)};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-style: none;
  box-shadow: ${(props) => (props.primary ? "5px 5px black" : "none")};
  cursor: pointer;
`;

export default Button;
