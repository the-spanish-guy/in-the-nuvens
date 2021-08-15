const colors = require('tailwindcss/colors');

const primary = '#8C7CFC';
const secondary = '#54C4E4';
const terciary = '#85AFF9';

const success = '#A3DE9A';
const warning = '#FFE27C';
const error = '#F98585';

const header = '#141C5F';
const subtitle = '#5F5C5C';
const input = '#BFBFBF';
const inactive = '#DBDBDB';

const shadow = '#CCD8EC';

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // false or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      ...colors,
      indigo: {
        light: '#b3bcf5',
        DEFAULT: '#5c6ac4',
        dark: '#202e78',
      },
      blue: {
        light: '#00FF',
        DEFUALT: '#00FF',
        dark: '#0FF',
      },
      alo: {
        light: '#F0F',
        DEFAULT: '#F0F',
        dark: '#0F0',
      },
      primary: primary,
      secondary: secondary,
      terciary: terciary,
      accent: '#54C4E4',
      error: error,
      warning: warning,
      success: success,
      title: header,
      subtitle: subtitle,
      input: input,
      inactive: inactive,
      borderCustom: '#9F8EE7',
      background: {
        light: '#ffffff',
        dark: '#1b2135',
      },
      label: {
        light: '#F5F4FD',
        dark: '#22283B',
      },
      shadow: {
        light: shadow,
        dark: 'rgba(1, 1, 1, .47)',
      },
      tilte_folders: {
        light: subtitle,
        DEFAULT: subtitle,
        dark: terciary,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
