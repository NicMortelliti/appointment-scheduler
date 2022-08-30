import styled from "styled-components";

const NavBar = styled.ul`
  background-color: ${(props) => props.theme.thirty};

  // Positioning
  position: fixed;
  top: 0;
  margin: 0;
  padding: 0;

  // Sizing
  width: 100%;
  display: flex;

  // justify-content: space-between;

  // Misc
  overflow: hidden;

  .current {
    background-color: ${(props) => props.theme.sixty};
    color: ${(props) => props.theme.thirty};
  }

  // float: ${(props) => (props.right ? "right" : "left")};
`;

export default NavBar;
