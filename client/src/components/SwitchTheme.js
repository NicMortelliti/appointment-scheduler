import React, { useState } from "react";

function SwitchTheme() {
  const [displayDarkTheme, setDisplayDarkTheme] = useState(true);
  const themeToggler = () => {
    const theme = !displayDarkTheme;

    theme
      ? document.documentElement.setAttribute("data-theme", "dark")
      : document.documentElement.setAttribute("data-theme", "light");

    setDisplayDarkTheme(theme);
  };

  return (
    <button className="navbtn switchtheme" onClick={themeToggler}>
      Switch Theme
    </button>
  );
}

export default SwitchTheme;
