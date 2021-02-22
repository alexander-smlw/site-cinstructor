import { model } from './model.js'
import { Site } from './classes/site.js'
import { Sidebar } from './classes/Sidebar.js'
import './styles/main.css'

const site = new Site('#site')

site.render(model)

const updateCallback = newBlock => {
  model.push(newBlock)

  site.render(model)
}

new Sidebar('#panel', updateCallback)
