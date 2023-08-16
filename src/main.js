import PointModel from './model/point-model.js';

import PointsListPresenter from './presenter/points-list-presenter.js';

import FilterView from './view/filter-view.js';
import SortingView from './view/sorting-view.js';

import { render } from './render.js';

const filterContainerElement = document.querySelector('.trip-controls__filters');
const pointsSectionElement = document.querySelector('.trip-events');
const pointModel = new PointModel();
const pointsListPresenter = new PointsListPresenter({
  pointsListSection: pointsSectionElement,
  pointModel: pointModel,
});

render(new FilterView(), filterContainerElement);
render(new SortingView(), pointsSectionElement);

pointsListPresenter.init();
