import React from 'react';

// Simple footer with copyright
export default function Footer() {
  return (
    <footer className="footer text-center">
      <p>&copy; {new Date().getFullYear()} Scrptble. All rights reserved.</p>
    </footer>
  );
}
