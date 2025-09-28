import React from "react";


class ChangeThemeComponent extends React.Component {
  render() {
  const { theme, toggleTheme, setLightTheme, setDarkTheme } = this.props;

    return (
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
        <button
          onClick={theme === 'light' ? this.props.setDarkTheme : this.props.setLightTheme}
          className="theme-toggle-btn theme-animated"
          style={{ fontSize: 18, verticalAlign: "middle", transition: 'color 0.5s', background: 'none', border: 'none', display: 'inline-flex', alignItems: 'center' }}
          title={theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        >
          {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        </button>
      </div>
    );
  }
}

export default ChangeThemeComponent;
