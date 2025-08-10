import React from "react";

class ChangeThemeComponent extends React.Component {
  render() {
    const { theme, toggleTheme, setShaderTheme } = this.props;

    return (
      <div>
        <button
          onClick={toggleTheme}
          className="theme-toggle-btn"
          style={{ fontSize: 23, verticalAlign: "middle" }}
        >
          {theme === "light" ? (
            <i className="bi bi-moon-fill" title="Dark Mode"></i>
          ) : (
            <i
              className="bi bi-brightness-high"
              style={{ color: "white" }}
              title="Light Mode"
            ></i>
          )}
        </button>
        <div
          className="wrapper"
          style={{ display: "inline-block", verticalAlign: "middle" }}
        >
          <div className="theme-change">
            <div
              onClick={setShaderTheme}
              className={`theme-option ${theme === "shader" ? "active" : ""}`}
              style={{
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                fontSize: 16,  // normal body text size
                gap: "0.3rem",
                color: theme === "shader" ? "white" : "inherit",
                userSelect: "none",
              }}
            >
              <span className="shaderLabel">Shader</span>
              {theme === "shader" && (
                <span
                  style={{
                    display: "inline-block",
                    lineHeight: 1,
                    color: "white",
                    fontWeight: "bold",
                    fontSize: 16, // keep checkmark same size as text
                  }}
                >
                  ✓
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ChangeThemeComponent;
