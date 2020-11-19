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
      this.inputRange = this.$root.find('[data-range="input"]')
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
        const $quality = $(this.inputRange.parent.parentNode)
        $quality.removeClass(('none'))

        this.format = convertName($target.value)

        if (this.format == 'image/png') {
          $quality.addClass('none')
        }

        this.$emit('toolbar:convert', this.format)
      }
    }

    onMousedown(event) {
      const $target = $(event.target)
      if ($target.data.type == 'range') {
        document.onmousemove = () => {
          this.inputRange.value = $target.value
        }
        document.onmouseup = () => {
          this.$emit('toolbar:convert', this.format, $target.value)
          document.onmousemove = null
          document.onmouseup = null
        }
      }
    }
}
