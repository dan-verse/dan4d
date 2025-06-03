import React from 'react';
import '../styles/NavLink.css';

function NavLink({ href, children }) {
  return (
    <a href={href} className="nav-link">
      {children}
      <span className="nav-link-underline"></span>
    </a>
  );
}

export default NavLink;