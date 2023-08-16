import EventModel from './model/event-model.js';

import EventsListPresenter from './presenter/events-list-presenter.js';

import FilterView from './view/filter-view.js';
import SortingView from './view/sorting-view.js';

import { render } from './render.js';

const filterContainerElement = document.querySelector('.trip-controls__filters');
const eventsSectionElement = document.querySelector('.trip-events');
const eventModel = new EventModel();
const eventsListPresenter = new EventsListPresenter({
  eventsListSection: eventsSectionElement,
  eventModel: eventModel,
});

render(new FilterView(), filterContainerElement);
render(new SortingView(), eventsSectionElement);

eventsListPresenter.init();
