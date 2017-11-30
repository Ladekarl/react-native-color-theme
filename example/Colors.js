import ThemeManager from 'react-native-color-theme';

const colors = new ThemeManager({
  redTheme: {
    backgroundColor: 'mistyrose',
    titleColor: 'red',
    fontColor: 'tomato'
  },
  blueTheme: {
    backgroundColor: 'azure',
    titleColor: 'blue',
    fontColor: 'skyblue'
  }
});

export default colors;
