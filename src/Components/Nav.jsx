import React, { useEffect, useState } from "react";
import "../Components/Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/200px-Netflix_2015_logo.svg.png "
        alt="Netflix logo"
        // https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/12c67644/original.png
      />
      <img
        className="nav__avater"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="Avatar logo"
      />
      {/* https://i.ping.com/originals/0d/dc/ca/0ddccae723d85a703b.png */}
    </div>
  );
}

export default Nav;
