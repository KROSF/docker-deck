// import global stylesheet
import './style.css'

// import `slides` from your mdx files and spread into `slides` export
import { slides as introduction } from './slides/01-introduction.mdx'
import { slides as dockerfile } from './slides/02-dockerfile.mdx'
import { slides as compose } from './slides/03-compose.mdx'

// theme export for code-surfer
export { dracula as theme } from 'code-surfer'

// theme exports for mdx-deck since `theme` is used by code-surfer
export const themes = []

// Spread your slides here...
export const slides = [
  ...introduction,
  ...dockerfile,
  ...compose,
]
