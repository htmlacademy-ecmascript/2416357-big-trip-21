import { getRandomArrayElement } from '../utils.js';

const mockPoints = [
  {
    "id": "0e075cf2-c8eb-4059-94a2-ca14dea82fae",
    "base_price": 6366,
    "date_from": "2023-08-07T21:00:05.202Z",
    "date_to": "2023-08-17T00:00:05.202Z",
    "destination": "013a0234-1ded-4e18-b76d-e67ccedd48a2",
    "is_favorite": false,
    "offers": [
      "66156de5-6713-43e1-87db-ee33e3fda3ae",
      "e737c8b9-699a-4909-a7a9-58b5e82f63ad",
      "a1e42f57-d458-40e8-a0cf-402ad615cb92"
    ],
    "type": "taxi"
  },
  {
    "id": "6cdce896-6db9-4d9c-b81d-dc63a4f48582",
    "base_price": 7808,
    "date_from": "2023-08-06T21:00:05.219Z",
    "date_to": "2023-08-16T23:00:05.219Z",
    "destination": "76f50ed5-0f60-48be-9cc1-2c95cc47bb8d",
    "is_favorite": false,
    "offers": [],
    "type": "sightseeing"
  },
  {
    "id": "453ed883-f6b2-41df-bb37-813dd138f961",
    "base_price": 8839,
    "date_from": "2023-08-03T21:00:05.219Z",
    "date_to": "2023-08-16T15:00:05.219Z",
    "destination": "dd9d422b-4a56-4ab5-9235-9f6af4e34a2f",
    "is_favorite": true,
    "offers": [],
    "type": "restaurant"
  },
  {
    "id": "1688a328-801a-4632-9187-65516e469428",
    "base_price": 8969,
    "date_from": "2023-08-06T21:00:05.219Z",
    "date_to": "2023-08-16T13:00:05.222Z",
    "destination": "76f50ed5-0f60-48be-9cc1-2c95cc47bb8d",
    "is_favorite": true,
    "offers": [],
    "type": "sightseeing"
  },
  {
    "id": "ab544c8d-0922-47a1-aac4-d93f7687c671",
    "base_price": 9957,
    "date_from": "2023-08-04T21:00:05.222Z",
    "date_to": "2023-08-16T11:00:05.222Z",
    "destination": "b92b887e-130d-494c-9e6a-e27f4e64971a",
    "is_favorite": false,
    "offers": [],
    "type": "bus"
  },
  {
    "id": "0e822a86-2863-44dd-b571-2b64cbec2508",
    "base_price": 7594,
    "date_from": "2023-08-08T21:00:05.222Z",
    "date_to": "2023-08-17T21:00:05.222Z",
    "destination": "013a0234-1ded-4e18-b76d-e67ccedd48a2",
    "is_favorite": true,
    "offers": [
      "bca60091-5b72-4cec-83eb-a69faec1abd5",
      "1781597c-d9de-4559-876d-34f4c5338a14",
      "4dbc8f39-1aac-4c7c-a48a-7a5e5461899d"
    ],
    "type": "train"
  },
]

function getRandomPoint() {
  return getRandomArrayElement(mockPoints);
}

export {getRandomPoint};
