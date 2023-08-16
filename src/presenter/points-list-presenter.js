import PointsListView from '../view/point-list-view.js';
import PointEditView from '../view/point-edit-view.js';
import PointView from '../view/point-in-list-view.js';
import { render } from '../render';


export default class PointsListPresenter {
  pointsListComponent = new PointsListView();

  constructor({pointsListSection, pointModel}) {
    this.pointsListSection = pointsListSection;
    this.pointModel = pointModel;
  }

  init() {
    this.listPoints = [...this.pointModel.getPoints()];

    render(this.pointsListComponent, this.pointsListSection);
    render(new PointEditView(), this.pointsListComponent.getElement());

    for (let i = 0; i < this.listPoints.length; i++) {
      render(new PointView({point: this.listPoints[i]}), this.pointsListComponent.getElement());
    }
  }
}
