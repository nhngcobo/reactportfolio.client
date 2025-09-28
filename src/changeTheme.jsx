import React from "react";


class ChangeThemeComponent extends React.Component {
  render() {
  const { theme, toggleTheme, setLightTheme, setDarkTheme } = this.props;

    return (
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
        <button
          onClick={theme === 'light' ? this.props.setDarkTheme : this.props.setLightTheme}
          className="theme-toggle-btn theme-animated"
          style={{ fontSize: 23, verticalAlign: "middle", transition: 'color 0.5s', background: 'none', border: 'none', display: 'inline-flex', alignItems: 'center' }}
          title={theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        >
          {theme === 'light' ? (
            <i className="bi bi-moon-fill" title="Dark Mode"></i>
          ) : (
            <i className="bi bi-brightness-high" title="Light Mode"></i>
          )}
        </button>
      </div>
    );
  }
}

export default ChangeThemeComponent;
