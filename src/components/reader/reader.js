import {EditorComponent} from '@core/EditorComponent'

export class Reader extends EditorComponent {
    static className = 'reader'

    constructor($root, options) {
      super($root, options = {
        name: 'Display',
        listeners: ['change'],
        ...options
      })
    }

    init() {
      super.init()
    }

    toHTML() {
      return `
        <input name="myFile" type="file" data-type="reader">  
      `
    }

    onChange(event) {
      const file = event.target.files[0]
      if (file) this.$emit('reader:upload', file)
    }
}
