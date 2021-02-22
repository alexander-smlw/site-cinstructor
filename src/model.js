import image from './assets/image.jpg'
import { TitleBlock, ImageBlock, ColumnsBlock, TextBlock  } from './classes/blocks'

export const model = [
  new TitleBlock('Конструктор сайтов на чистом JavaScript', {
    tag: 'h2',
    styles: {
      background: 'red',
      color: '#fff',
      padding: '1.5rem',
      'text-align': 'center'
    }
  }),

  new TextBlock('here we go with some text!', {
    styles: {
      background: 'yellow',
      padding: '1rem',
      'font-weight': 'bold'
    }
  }),

  new ColumnsBlock([
    '1111111111',
    '2222222222',
    '3333333333',
    '4444444444'
  ], {
    styles: {
      background: 'green',
      padding: '1rem',
      color: '#fff',
      'font-weight': 'bold'
    }
  }),

  new ImageBlock(image, {
    styles: {
      padding: '2rem 0',
      display: 'flex',
      'justify-content': 'center'
    },
    imageStyles: {
      width: '500px',
      height: 'auto'
    },
    alt: 'Это картинка'
  })
]
