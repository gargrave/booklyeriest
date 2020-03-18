/* eslint-disable sort-keys */
const aqua = '#7fdbff'
const black = '#111'
const blue = '#0074d9'
const fuchsia = '#f012be'
const gray = '#aaa'
const green = '#2ecc40'
const lime = '#01ff70'
const maroon = '#85144b'
const navy = '#001f3f'
const olive = '#3d9970'
const orange = '#ff851b'
const purple = '#b10dc9'
const red = '#ff4136'
const silver = '#ddd'
const teal = '#39cccc'
const white = 'white'
const yellow = '#ffdc00'

const base = Object.freeze({
  aqua,
  black,
  blue,
  fuchsia,
  gray,
  green,
  lime,
  maroon,
  navy,
  olive,
  orange,
  purple,
  red,
  silver,
  teal,
  white,
  yellow,
})

const theme = Object.freeze({
  primary: blue,
  secondary: gray,
  success: green,
  info: teal,
  warning: orange,
  danger: red,
  light: white,
  dark: black,
})

export const colors = Object.freeze({
  base,
  theme,
})
