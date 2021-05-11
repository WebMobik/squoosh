import {$} from '@core/dom'

export function toolShow($target) {
  if ($target.data.type == 'deploy') {
    const $toolsBlock =
        $($target.$el.parentNode.parentNode.childNodes[3])

      $toolsBlock.contains('none') ?
        $toolsBlock.removeClass('none') :
        $toolsBlock.addClass('none')
  }
}
