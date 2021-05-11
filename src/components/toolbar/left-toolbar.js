import {EditorComponent} from '@/core/EditorComponent'
import {createToolbar} from './toolbar.template'
import {toolShow} from './toolbar.functional'
import {convertName} from '@core/utils'
import {$} from '@core/dom'

export class LeftToolbar extends EditorComponent {
    static className = 'left_panel'

    constructor($root, options) {
      super($root, options = {
        name: 'LeftPanel',
        listeners: ['click', 'change'],
        ...options
      })
    }

    init() {
      super.init()

      this.canvas = document.querySelectorAll('[data-canvas="img"]')[1]
    }

    toHTML() {
      const leftDownload = `
            <div class="size__image">
                <button class="download-img bg-blue">
                    <i class="material-icons">system_update_alt</i>
                </button>
            </div>
            <span class="size__size">107 kB</span>
        `

      return createToolbar(leftDownload)
    }

    onClick(event) {
      const $target = $(event.target)
      toolShow($target)
    }

    onChange(event) {
      const $target = $(event.target)
      if ($target.data.type == 'format') {
        const format = convertName($target.value)
        // console.log(typeof convertName($target.value))
        this.$emit('toolbar:convert', this.canvas, format) // size
      }
    }
}
