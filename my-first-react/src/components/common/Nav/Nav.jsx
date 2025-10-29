import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const NavButton = styled.button`
  background: none;
  border: 1px solid #ccc;
  color: white;
  margin: 0 5px;
  padding: 6px 12px;
  cursor: pointer;
  background-color: #333;
`;

const Nav = () => {
  const navi = useNavigate();

  return (
    <nav>
      <NavButton onClick={() => navi("/")}>Home</NavButton>
      <NavButton onClick={() => navi("/fusion")}>Fusion</NavButton>
      <NavButton onClick={() => navi("/01")}>01</NavButton>
      <NavButton onClick={() => navi("/02")}>02</NavButton>
      <NavButton onClick={() => navi("/03")}>03</NavButton>
      <NavButton onClick={() => navi("/input")}>Input</NavButton>
      <NavButton onClick={() => navi("/foods")}>부산</NavButton>
    </nav>
  );
};

export default Nav;
