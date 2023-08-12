import EventsListView from '../view/events-list-view';
import EventEditView from '../view/event-edit-view';
import EventView from '../view/event-in-list-view';
import { render } from '../render';

export default class EventsListPresenter {
  eventsListComponent = new EventsListView();

  constructor(eventsListSection) {
    this.eventsListSection = eventsListSection;
  }

  init() {
    render(this.eventsListComponent, this.eventsListSection);
    render(new EventEditView(), this.eventsListComponent.getElement());

    for (let i = 0; i < 3; i++) {
      render(new EventView(), this.eventsListComponent.getElement());
    }
  }
}
