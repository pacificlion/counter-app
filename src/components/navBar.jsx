import React from "react";

//stateless functional component instead of having classes
//react adds props arg at runtime
//{property} = this.object
//extracts property from object
const NavBar = ({ counterLength }) => {
  console.log("navbar-rendered");
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
          <span className="badge-pill badge badge-secondary">
            {counterLength}
          </span>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
