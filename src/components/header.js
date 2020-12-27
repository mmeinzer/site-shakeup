import React from "react";
import { Link } from "gatsby";

import "./header.css";

const Header = ({ siteTitle }) => (
  <div>
    <div className="nav">
      <Link to="/">{siteTitle}</Link>
      <Link to="/about/">About</Link>
      <Link to="/services/">Services</Link>
      <Link to="/contact/">Contact</Link>
    </div>
  </div>
);

export default Header;
