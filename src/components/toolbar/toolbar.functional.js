export function clickFunctional($target) {
  if ($target.data.type == 'deploy') {
    const toolsBlock =
        $target.$el.parentNode.parentNode.childNodes[3]

      toolsBlock.classList.contains('none') ?
        toolsBlock.classList.remove('none') :
        toolsBlock.classList.add('none')
  }
}
