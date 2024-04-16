import { IoMenuSharp, IoClose } from "react-icons/io5";
import {
  NavbarStyled,
  NavbarMenu,
  NavbarLogin,
  NavbarTitle,
} from "./navbarStyle";

import teste from "../../assets/images/image1.jpg";

const Navbar = () => {
  return (
    <NavbarStyled>
      <NavbarMenu>
        <IoMenuSharp color="#ffffff" size={51} />
      </NavbarMenu>
      <NavbarTitle>VIELAS</NavbarTitle>
      <NavbarLogin>
        <p>login</p>
      </NavbarLogin>
    </NavbarStyled>
  );
};

export default Navbar;
