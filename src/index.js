import Display from './components/display'
import Resizer from './components/resizer'
import Toolbar from './components/toolbar'
import Editor from './components/editor'

const editor = new Editor('$app', {components: [
  Display, Resizer, Toolbar
]})

editor.render()
