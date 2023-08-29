import React from "react";

import "./styles.css";

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <footer>
          <p> Copyright ©️ {new Date().getFullYear()} </p>
        </footer>
      </body>
    </html>
  );
}

export default RootLayout;
