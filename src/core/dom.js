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

  getProp(value) {
    return this.$el.style.getPropertyValue(value)
  }

  get data() {
    return this.$el.dataset
  }

  get getWidth() {
    return this.$el.offsetWidth
  }

  attr(name, value) {
    if (!value) {
      return this.$el.getAttribute(name)
    }
    this.$el.setAttribute(name, value)
  }

  getCoords() {
    return this.$el.getBoundingClientRect()
  }

  before(after, before) {
    this.$el.parentElement.insertBefore(after, before)
  }

  each(el) {
    return this.$el.forEach(el)
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
