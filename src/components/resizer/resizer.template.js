export function createResizer() {
  const resizePluse = 'data-resize="pluse"'
  const resizeMinus = 'data-resize="minus"'
  const resizeValue = 'data-resize="value"'
  const resizeRotation = 'data-resize="rotation"'
  const resizeBackground = 'data-resize="background"'

  return `
        <div class="resizer__tools">
            <button class="resizer__btn away" ${resizeMinus}>
                <i class="material-icons blue-ico" ${resizeMinus}>-</i>
            </button>

            <span class="resizer__resize">
                <input type="number" value="100" required ${resizeValue}>
            </span>

            <button class="resizer__btn closer" ${resizePluse}>
                <i class="material-icons blue-ico" ${resizePluse}>+</i>
            </button>
        </div>

        <button class="resizer__btn anothe_tool" ${resizeRotation}>
         <i class="material-icons blue-ico" ${resizeRotation}>rotate_right</i>
        </button>

        <button class="resizer__btn anothe_tool" ${resizeBackground}>
            <i class="material-icons" ${resizeBackground}>flip_to_front</i>
        </button> <!-- flip_to_back -->
    
  `
}
