import { globals } from '../vitepress'
import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import './style.css'

const define = <T>(value: T): T => value

export default define<Theme>({
  extends: DefaultTheme,
  enhanceApp: ({ app }) => {
    globals.forEach(([name, Comp]) => {
      app.component(name, Comp)
    })
  },
})
