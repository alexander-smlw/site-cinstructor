import { green } from 'colorette'
import M from 'minimatch'
import image from './assets/image.jpg'

export const model = [
  {
    type: 'title',
    value: 'Конструктор сайтов на чистом JavaScript',
    options: {
      tag: 'h2',
      styles: {
        background: 'red',
        color: '#fff',
        padding: '1.5rem',
        'text-align': 'center'
      }
    }
  },
  {
    type: 'text',
    value: 'here we go with some text!',
    options: {
      styles: {
        background: 'yellow',
        padding: '1rem',
        'font-weight': 'bold'
      }
    }
  },
  {
    type: 'columns',
    value: [
      '1111111111',
      '2222222222',
      '3333333333',
      '4444444444'
    ],
    options: {
      styles: {
        background: 'green',
        padding: '1rem',
        color: '#fff',
        'font-weight': 'bold'
      }
    }
  },
  {
    type: 'image',
    value: image,
    options: {
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
    },
  }
]
