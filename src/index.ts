import type { App } from 'vue'
import { Button } from './Button'
import { NavBar } from "./NavBar";
import { NavLink } from "./NavBar";
import 'uno.css'

export { Button, NavBar, NavLink };

export default {
  install: (app: App) => {
    app.component('Button', Button)
    app.component('Navbar', NavBar)
    app.component('NavLink', NavLink)
  }
}
