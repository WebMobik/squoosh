import {EditorComponent} from '@/core/EditorComponent'
import {createToolbar} from './toolbar.template'
import {toolShow} from './toolbar.functional'
import {convertName, convertSize} from '@core/utils'
import {$} from '@core/dom'
import {canvasDraw} from '../../core/utils'

export class RightToolbar extends EditorComponent {
    static className = 'right_panel'

    constructor($root, options) {
      super($root, options = {
        name: 'RightPanel',
        listeners: ['click', 'change', 'mousedown', 'keydown'],
        ...options
      })

      this.format = 'image/orig'
      this.image = ''
    }

    init() {
      super.init()

      this.canvas = document.querySelectorAll('[data-canvas="img"]')[0]
      this.inputRange = this.$root.find('[data-range="input"]')
      this.$tools = this.$root.find('[data-type="tools"]')
      this.$size = this.$root.find('[data-type="size"]')
      this.ctx = this.canvas.getContext('2d')

      this.$on('reader:upload', file => {
        const size = convertSize(file.size)
        this.$size.html(size)
      })
      this.$on('image:upload', img => {
        this.$tools.find('[data-tool="width"]')
            .value = img.width
        this.$tools.find('[data-tool="height"]')
            .value = img.height
        this.image = img
        $(this.canvas).css({width: img.width + 'px', height: img.height + 'px'})
      })
    }

    toHTML() {
      const rightDownload = `
            <span class="size__size right_tool" data-type="size">0</span>
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
      toolShow($target)
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

    onKeydown(event) {
      const $target = $(event.target)
      if ($target.data.tool == 'width') { // resize width
        // canvasDraw(this.canvas, this.ctx, this.image)
        this.ctx.canvas.width = $target.value
      }
      if ($target.data.tool == 'height') { // resize height
        console.log($target)
      }
    }
}
