import Canvas from './components/canvas'

import './style.css'

class App {
  canvas: Canvas

  constructor() {
    this.canvas = new Canvas()

    this.render()
  }

  render() {
    this.canvas.render()
    requestAnimationFrame(this.render.bind(this))
  }
}

export default new App()