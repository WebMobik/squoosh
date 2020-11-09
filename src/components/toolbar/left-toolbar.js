import {EditorComponent} from '@/core/EditorComponent'
import {createToolbar} from './toolbar.template'
import {clickFunctional} from './toolbar.functional'
import {$} from '@core/dom'

export class LeftToolbar extends EditorComponent {
    static className = 'left_panel'

    constructor($root, options) {
      super($root, options = {
        name: 'LeftPanel',
        listeners: ['click'],
        ...options
      })
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
      clickFunctional($target)
    }
}
