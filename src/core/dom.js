export class Dom {
  constructor(selector) {
    this.$el = typeof selector === 'string' ?
        document.querySelector(selector) :
        selector
  }

  html(html) {
    return this.$el.innerHTML = html
  }

  append(node) {
    if (node instanceof Dom) {
      node = node.$el
    }

    if (Element.prototype.append) {
      this.$el.append(node)
    } else {
      this.$el.appendChild(node)
    }
  }

  on(listener, fn) {
    this.$el.addEventListener(listener, fn)
  }

  off(listener, fn) {
    this.$el.removeEventListener(listener, fn)
  }
}

export function $(selector) {
  return new Dom(selector)
}

$.create = (tagName, classes = '') => {
  const el = document.createElement(tagName, classes)
  if (classes != '') {
    el.classList.add(classes)
  }
  return $(el)
}
