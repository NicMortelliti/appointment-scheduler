import styled from "styled-components";

const NavBar = styled.ul`
  position: fixed;
  width: 100%;
  top: 0;
  background-color: ${(props) => props.theme.thirty};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  margin: 0;
  overflow: hidden;
  list-style-type: none;

  display: flex;

  .current {
     {
      background-color: ${(props) => props.theme.sixty};
      color: ${(props) => props.theme.thirty};
    }
  }

  // font-size: 1em;
  // margin: 1em;
  // padding: 0.25em 1em;
  // border-radius: 3px;
  // cursor: pointer;
`;

export default NavBar;
