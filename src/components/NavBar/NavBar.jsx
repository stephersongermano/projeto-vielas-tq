import React, { useState } from "react";
import { IoMenuSharp, IoClose } from "react-icons/io5";
import NavbarStyled from "./navbarStyle";

const Navbar = () => {
  return (
    <NavbarStyled>
      <NavbarStyled.NavbarLinksContainer>
        <NavbarStyled.NavbarMenu>
          <IoMenuSharp color="#ffffff" size={41} />
        </NavbarStyled.NavbarMenu>
        <NavbarStyled.NavbarTitle>VIELAS</NavbarStyled.NavbarTitle>
        <NavbarStyled.NavbarSign>login</NavbarStyled.NavbarSign>
      </NavbarStyled.NavbarLinksContainer>
    </NavbarStyled>
  );
};

export default Navbar;
