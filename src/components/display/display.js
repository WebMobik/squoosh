export default class Display {
    static className = 'editor__edit_img'

    constructor() {

    }

    toHTML() {
      return `
            <div class="img-comp-img">
                <img src="" alt="editing">
            </div>
            <div class="img-comp-slider"></div>
            <div class="img-comp-img img-comp-overlay">
                <img src="" alt="editing">
            </div>
        `
    }
}


