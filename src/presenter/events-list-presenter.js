import EventsListView from '../view/events-list-view';
import EventEditView from '../view/event-edit-view';
import EventView from '../view/event-in-list-view';
import { render } from '../render';


export default class EventsListPresenter {
  eventsListComponent = new EventsListView();

  constructor({eventsListSection, eventModel}) {
    this.eventsListSection = eventsListSection;
    this.eventModel = eventModel;
  }

  init() {
    this.listEvents = [...this.eventModel.getEvents()]

    render(this.eventsListComponent, this.eventsListSection);
    render(new EventEditView(), this.eventsListComponent.getElement());

    for (let i = 0; i < this.listEvents.length; i++) {
      render(new EventView({point: this.listEvents[i]}), this.eventsListComponent.getElement());
    }
  }
}
