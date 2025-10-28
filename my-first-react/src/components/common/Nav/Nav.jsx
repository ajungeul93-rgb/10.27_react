import { StyledNav, NavLink } from "./Nav.styles";
import { useNavigate } from "react-router-dom";

const Nav = () => {
    const navi = useNavigate();

    return (
        <StyledNav>
            <NavLink onClick={() => navi("/")}>Home</NavLink>
            <NavLink onClick={() => navi("/fusion")}>fusion</NavLink>
            <NavLink onClick={() => navi("/01")}>01</NavLink>
            <NavLink onClick={() => navi("/02")}>02</NavLink>
            <NavLink onClick={() => navi("/03")}>03</NavLink>
        </StyledNav>
    );
};