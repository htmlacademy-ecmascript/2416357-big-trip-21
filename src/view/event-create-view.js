import { createElement } from '../render.js';
import { createEventCreateTemplate } from '../template/event-create-template.js';

export default class EventCreateView {
  getTemplate() {
    return createEventCreateTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
