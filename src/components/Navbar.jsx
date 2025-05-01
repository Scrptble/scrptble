import React from 'react';
import { Link } from 'react-router-dom';

// Top navigation bar with links
export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Scrptble</Link>
      <Link to="/about">About</Link>
      <Link to="/features">Features</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/careers">Careers</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}
