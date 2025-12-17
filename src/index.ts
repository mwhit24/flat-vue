import type { App } from 'vue'
import { Button } from './Button/Button'
import 'uno.css'

export { Button }

export default {
  install: (app: App) => {
    app.component('Button', Button)
  }
}
