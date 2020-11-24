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
        listeners: ['click', 'change', 'mousedown', 'input'],
        ...options
      })

      this.format = 'image/orig'
    }

    init() {
      super.init()

      this.canvas = document.querySelectorAll('[data-canvas="img"]')[0]
      this.inputRange = this.$root.find('[data-range="input"]')
      this.$tools = this.$root.find('[data-type="tools"]')
      // this.$on('reader:upload', file => { // add emit where image resize type
      //   this.$root.find('[data-type="size"]').html(file.size)
      // })
      this.$on('reader:upload', () => {
        this.$tools.find('[data-tool="width"]')
            .value = this.canvas.clientWidth
        this.$tools.find('[data-tool="height"]')
            .value = this.canvas.clientHeight
      })
    }

    toHTML() {
      const rightDownload = `
            <span class="size__size" data-type="size">0</span>
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

        this.format = convertName($target.value)

        $quality.removeClass('none')
        if (this.format == 'image/png' || this.format == 'image/orig') {
          $quality.addClass('none')
        }

        this.$emit('toolbar:convert', this.format)
      }
      if ($target.data.tool == 'width') {
        console.log($target)
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

    onInput(event) {
      const $target = $(event.target)
      if ($target.data.tool == 'width') { // resize width
        $(this.canvas).css({width: $target.value})
      }
      if ($target.data.tool == 'height') { // resize height
        console.log($target)
      }
    }
}
