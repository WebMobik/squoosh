export class Display {
    static className = 'display'

    constructor() {

    }

    toHTML() {
      return `
            <div class="img-comp-img">
                <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" alt="editing">
            </div>
            <div class="img-comp-slider"></div>
            <div class="img-comp-img img-comp-overlay">
                <img src="https://cdn.pixabay.com/photo/2015/02/24/15/41/dog-647528__340.jpg" alt="editing">
            </div>
        `
    }
}

