# react-native-color-theme
Simple theme manager for react native

I created this because i needed a simple way to switch between themes and a place to store my colors in react native

## What it does

By using this you can easily centralize your colors in themes.
You can also create multiple themes and switch between them on the fly.

## Installation

npm install react-native-color-theme --save

## Usage

 ```js
import ThemeManager from 'react-native-color-theme';

const colors = new ThemeManager({
  blueTheme: {
      mainColor: 'dodgerblue',
      statusBarColor: '#005eff',
      statusBarStyle: 'light-content',
      backgroundColor: '#e5e5e5',
  },
  redTheme: {
      mainColor: 'red',
      statusBarColor: '#ff4e00',
      statusBarStyle: 'light-content',
      backgroundColor: '#ff7100',
  }
});
```

 Use the `colors` object literal directly in the `style` accessing the key of the color:

```js
<Text style={{textColor: colors.mainColor}}>
  Themed color
</Text>
```

The first theme passed to `ThemeManager` (in this case `blueTheme`) is the default. To change the theme use the setTheme(theme) method from the api.

## API

* setTheme(theme) - theme is a string identifier. To change to redTheme in above example call colors.setTheme('redTheme')
* getTheme() - returns current theme

## Questions or suggestions?
Feel free to [open an issue](https://github.com/Ladekarl/react-native-color-theme/issues/new)
