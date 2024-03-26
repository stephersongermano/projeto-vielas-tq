import React, { useState } from "react";
import { IoMenuSharp, IoClose } from "react-icons/io5";

import "./navbar.css";

const Menu = () => {
  <>
    <p>
      <a href="home">Home</a>
    </p>
    <p>
      <a href="exmp1">Exemplo 1</a>
    </p>
    <p>
      <a href="exmp2">Exemplo 2</a>
    </p>
  </>;
};

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <>
      <div className="vielas__navbar">
        <div className="vielas__navbar-links-container">
          <div className="vielas__navbar-menu">
            {toggleMenu ? (
              <IoClose
                color="#ffffff"
                size={27}
                onClick={() => setToggleMenu(false)}
              />
            ) : (
              <IoMenuSharp
                color="#ffffff"
                size={27}
                onClick={() => setToggleMenu(true)}
              />
            )}
            {toggleMenu && (
              <div className="vielas__navbar-menu_container scale-up-center">
                <div className="vielas__navbar-menu_container-links">
                  <Menu />
                </div>
              </div>
            )}
          </div>
          <div>
            <h1 className="vielas__navbar-title">VIELAS</h1>
          </div>
          <div className="vielas__navbar-sign">login</div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
