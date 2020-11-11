import './scss/style.scss'
import Display from './components/display'
import Resizer from './components/resizer'
import {RightToolbar, LeftToolbar} from './components/toolbar'
import Editor from './components/editor'
import Reader from './components/reader'


const editor = new Editor('#app', {components: [
  Display, Reader, Resizer, RightToolbar, LeftToolbar
]})

editor.render()
