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
  // align-items: center;
  
  // Misc
  overflow: hidden;

  .current {
     {
      background-color: ${(props) => props.theme.sixty};
      color: ${(props) => props.theme.thirty};
    }
  }
`;

export default NavBar;
