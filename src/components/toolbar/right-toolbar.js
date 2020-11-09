import {EditorComponent} from '@/core/EditorComponent'
import {createToolbar} from './toolbar.template'
import {clickFunctional} from './toolbar.functional'
import {$} from '@core/dom'

export class RightToolbar extends EditorComponent {
    static className = 'right_panel'

    constructor($root, options) {
      super($root, options = {
        name: 'RightPanel',
        listeners: ['click'],
        ...options
      })
    }

    toHTML() {
      const rightDownload = `
            <span class="size__size">107 kB</span>
            <div class="size__image">
                <button class="download-img bg-blue">
                    <i class="material-icons">system_update_alt</i>
                </button>
            </div>
        `

      return createToolbar(rightDownload)
    }

    onClick(event) {
      const $target = $(event.target)
      clickFunctional($target)
    }
}
