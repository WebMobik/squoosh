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

  get data() {
    return this.$el.dataset
  }

  get getWidth() {
    return this.$el.offsetWidth
  }

  getCoords() {
    return this.$el.getBoundingClientRect()
  }

  before(after, before) {
    this.$el.parentElement.insertBefore(after, before)
  }

  find(selector) {
    return $(this.$el.querySelector(selector))
  }

  findAll(selector) {
    return $(this.$el.querySelectorAll(selector))
  }

  on(listener, fn) {
    this.$el.addEventListener(listener, fn)
  }

  off(listener, fn) {
    this.$el.removeEventListener(listener, fn)
  }

  css(styles = {}) {
    Object.keys(styles).forEach(key => {
      return this.$el.style[key] = styles[key]
    })
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
