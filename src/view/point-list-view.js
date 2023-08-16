import { createElement } from '../render.js';
import { createPointsListTemplate } from '../template/points-list-template.js';


export default class PointsListView {
  getTemplate() {
    return createPointsListTemplate();
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
