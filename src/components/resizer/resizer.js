export default class Resize {
  static className = 'editor__resize_tools'

  constructor() {

  }

  toHTML() {
    return `
        <button class="btn_resize">
          <i class="material-icons blue-ico">-</i>
        </button>

        <span class="span_resize">
          <input type="number" value="40" required>%
        </span>

        <button class="btn_resize">
          <i class="material-icons blue-ico">+</i>
        </button>

        <button class="btn_resize">
          <i class="material-icons blue-ico">rotate_right</i>
        </button>

        <button class="btn_resize bg-blue">
          <i class="material-icons">flip_to_front/i>
        </button> <!-- flip_to_back -->
      `
  }
}
