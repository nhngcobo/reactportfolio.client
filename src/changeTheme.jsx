import React from "react";

class ChangeThemeComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {  
    const { theme, toggleTheme } = this.props;

    return (
      <>
        <div>
          <button onClick={toggleTheme} className="theme-toggle-btn">
            {theme === "light" ? (
              <i className="bi bi-moon-fill" style={{ fontSize: 23 }} title="Dark Mode"></i>
            ) : (
              <i className="bi bi-brightness-high" style={{ fontSize: 23, color: "white" }} title="Light Mode"></i>
            )}
          </button>
        </div>
      </>
    );
  
  }}
export default ChangeThemeComponent;
