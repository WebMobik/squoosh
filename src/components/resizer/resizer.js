export class Resizer {
  static className = 'resizer'

  constructor() {

  }

  toHTML() {
    return `
        <div class="resizer__tools">
          <button class="resizer__btn away">
            <i class="material-icons blue-ico">-</i>
          </button>

          <span class="resizer__resize">
            <input type="number" value="40" required>
          </span>

          <button class="resizer__btn closer">
            <i class="material-icons blue-ico">+</i>
          </button>
        </div>
          <button class="resizer__btn anothe_tool">
            <i class="material-icons blue-ico">rotate_right</i>
          </button>

          <button class="resizer__btn anothe_tool bg-blue">
            <i class="material-icons">flip_to_front</i>
          </button> <!-- flip_to_back -->
        
      `
  }
}
