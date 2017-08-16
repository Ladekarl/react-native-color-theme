'use strict';

export default class Theme {
  _props;
  _theme;

  constructor(props) {
    this._props = props;
    this.setTheme(this._getDefaultTheme())
  }

  _getDefaultTheme() {
    return Object.keys(this._props)[0];
  }

  setTheme(theme) {
    const propsTheme = this._props[theme];
    const defaultTheme = this._getDefaultTheme();
    this._theme = (propsTheme ? theme : defaultTheme);
    const colors = this._props[this._theme];
    if (colors) {
      for (const key in colors) {
        if (colors.hasOwnProperty(key)) {
          this[key] = colors[key];
        }
      }
    }
  }

  getTheme() {
    return this._theme;
  }
}