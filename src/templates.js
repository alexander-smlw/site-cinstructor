import { row, col, css } from './utils'

function title(block) {
  const { tag = 'h1', styles } = block.options

  return row(col(`<${tag}>${block.value}</${tag}>`), css(styles))
}

function text(block) {
  const { styles } = block.options

  return row(col(`<p>${block.value}</p>`), css(styles))
}

function columns(block) {
  const { styles } = block.options

  const html = block.value.map(col).join('')

  return row(html, css(styles))
}

function image(block) {
  const { imageStyles: is, alt = '', styles } = block.options

  console.log(imageStyles, block.options)

  return row(`<img alt="${alt}" src="${block.value}" style="${css(is)}" />`, css(styles))
}

export const templates = {
  title,
  text,
  image,
  columns
}
