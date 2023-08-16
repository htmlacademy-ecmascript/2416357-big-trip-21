import { getRandomPoint } from '../mock/point.js';
import { POINT_COUNT } from '../consts.js';

export default class PointModel {
  points = Array.from({length: POINT_COUNT}, getRandomPoint);

  getPoints() {
    return this.points;
  }
}
