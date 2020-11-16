import {EditorComponent} from '@/core/EditorComponent'
import {createToolbar} from './toolbar.template'
import {clickFunctional} from './toolbar.functional'
import {convertName} from '@core/utils'
import {$} from '@core/dom'

export class RightToolbar extends EditorComponent {
    static className = 'right_panel'

    constructor($root, options) {
      super($root, options = {
        name: 'RightPanel',
        listeners: ['click', 'change', 'mousedown'],
        ...options
      })

      this.format = null
    }

    init() {
      super.init()

      this.canvas = document.querySelectorAll('[data-canvas="img"]')[0]
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

    onChange(event) {
      const $target = $(event.target)
      if ($target.data.type == 'format') {
        this.format = convertName($target.value)
        this.$emit('toolbar:convert', this.canvas, this.format)
      }
    }

    onMousedown(event) {
      const $target = $(event.target)
      const inputRange = this.$root.find('[data-range="input"]')
      if ($target.data.type == 'range') {
        document.onmousemove = () => {
          inputRange.value = $target.value
        }
        document.onmouseup = () => {
          this.$emit('toolbar:convert', this.canvas, this.format, $target.value)
          document.onmousemove = null
          document.onmouseup = null
        }
      }
    }
}
