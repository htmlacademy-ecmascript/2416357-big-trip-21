import { getRandomEvent } from '../mock/event.js';
import { EVENT_COUNT } from '../consts.js';

export default class EventModel {
  events = Array.from({length: EVENT_COUNT}, getRandomEvent);

  getEvents() {
    return this.events;
  }
}
