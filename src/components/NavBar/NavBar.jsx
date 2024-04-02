import { IoMenuSharp, IoClose } from "react-icons/io5";
import {
  NavbarStyled,
  NavbarMenu,
  NavbarLogin,
  NavbarTitle,
} from "./navbarStyle";

const Navbar = () => {
  return (
    <NavbarStyled>
      <NavbarMenu>
        <IoMenuSharp color="#ffffff" size={40} />
      </NavbarMenu>
      <NavbarTitle>VIELAS</NavbarTitle>
      <NavbarLogin>login</NavbarLogin>
    </NavbarStyled>
  );
};

export default Navbar;
