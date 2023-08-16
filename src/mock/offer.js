import { getRandomArrayElement } from '../utils.js';

const mockIffers = [
  {
    "type": "taxi",
    "offers": [
      {
        "id": "e70244c4-f2c8-46e0-b811-7d3ff891a1a6",
        "title": "Upgrade to a business class",
        "price": 79
      },
      {
        "id": "b1f89548-43ec-45aa-9af8-ab1c949a92d6",
        "title": "Choose the radio station",
        "price": 70
      },
      {
        "id": "66156de5-6713-43e1-87db-ee33e3fda3ae",
        "title": "Choose temperature",
        "price": 175
      },
      {
        "id": "e737c8b9-699a-4909-a7a9-58b5e82f63ad",
        "title": "Drive quickly, I'm in a hurry",
        "price": 131
      },
      {
        "id": "a1e42f57-d458-40e8-a0cf-402ad615cb92",
        "title": "Drive slowly",
        "price": 148
      }
    ]
  },
  {
    "type": "bus",
    "offers": [
      {
        "id": "5c649953-d2d2-488b-b2d8-7afa09a11053",
        "title": "Infotainment system",
        "price": 74
      },
      {
        "id": "e363abed-a4c3-41c1-9fb0-c541c61619c1",
        "title": "Order meal",
        "price": 50
      },
      {
        "id": "fbf78cff-e4a8-4d9f-ab4e-c6d60a34225f",
        "title": "Choose seats",
        "price": 150
          }
      ]
  },
  {
    "type": "train",
    "offers": [
      {
        "id": "bca60091-5b72-4cec-83eb-a69faec1abd5",
        "title": "Book a taxi at the arrival point",
        "price": 57
      },
      {
        "id": "1781597c-d9de-4559-876d-34f4c5338a14",
        "title": "Order a breakfast",
        "price": 194
      },
      {
        "id": "4dbc8f39-1aac-4c7c-a48a-7a5e5461899d",
        "title": "Wake up at a certain time",
        "price": 35
          }
      ]
  },
  {
    "type": "flight",
    "offers": [
      {
        "id": "c314b703-defa-48c1-a3ae-f7b8857ffc49",
        "title": "Choose meal",
        "price": 200
      },
      {
        "id": "55afcf9b-40e3-406e-b9e2-03f49f10ee59",
        "title": "Choose seats",
        "price": 143
      },
      {
        "id": "7ceb7953-a399-4c14-b431-8c414b4a96bc",
        "title": "Upgrade to comfort class",
        "price": 180
      },
      {
        "id": "7f441b4e-89b7-4a64-b5a0-ae7caeafa8ff",
        "title": "Upgrade to business class",
        "price": 160
      },
      {
        "id": "5e078301-66d5-4e13-8699-cfb81b218b69",
        "title": "Add luggage",
        "price": 187
      },
      {
        "id": "a5a73808-f3f0-44d4-a240-12a481784f0d",
        "title": "Business lounge",
        "price": 44
          }
      ]
  },
  {
    "type": "check-in",
    "offers": [
      {
        "id": "fab969d5-a4a2-47eb-83ac-d90e6df34533",
        "title": "Choose the time of check-in",
        "price": 196
      },
      {
        "id": "d5d20923-25c1-4d0e-b54b-acb0ba9571ca",
        "title": "Choose the time of check-out",
        "price": 68
      },
      {
        "id": "f634db84-43ea-41c5-be33-ef82d328f2d8",
        "title": "Add breakfast",
        "price": 197
      },
      {
        "id": "7c798e7d-54d2-47bd-a609-7abcaa232b69",
        "title": "Laundry",
        "price": 38
      },
      {
        "id": "5c12ef43-7496-4745-ab6d-ec91afc2379c",
        "title": "Order a meal from the restaurant",
        "price": 145
          }
      ]
  },
  {
    "type": "sightseeing",
    "offers": []
  },
  {
    "type": "ship",
    "offers": [
      {
        "id": "ec1935e8-aa08-49d5-ba52-0228cc8eb19b",
        "title": "Choose meal",
        "price": 158
      },
      {
        "id": "25614477-f968-4433-ba4b-592dcb3a9e9a",
        "title": "Choose seats",
        "price": 81
      },
      {
        "id": "16e0a7f9-8cd6-4467-9655-97c906aa55c6",
        "title": "Upgrade to comfort class",
        "price": 146
      },
      {
        "id": "fd365a70-1241-4e92-bf5b-304a9ea68047",
        "title": "Upgrade to business class",
        "price": 99
      },
      {
        "id": "9f88524d-d5cc-4e9e-bed7-368e104e13ab",
        "title": "Add luggage",
        "price": 154
      },
      {
        "id": "f299922f-dc81-4a3f-8104-e13c8faa4a52",
        "title": "Business lounge",
        "price": 89
          }
      ]
  },
  {
    "type": "drive",
    "offers": [
      {
        "id": "4daf8edf-b817-4b61-b5d1-a608b371927c",
        "title": "With automatic transmission",
        "price": 196
      },
      {
        "id": "7c274ffe-8e79-496f-90a0-06bff7a67303",
        "title": "With air conditioning",
        "price": 34
          }
      ]
  },
  {
    "type": "restaurant",
    "offers": [
      {
        "id": "6b03d8f0-ecf8-483e-b4ad-ca86b1acf727",
        "title": "Choose live music",
        "price": 111
      },
      {
        "id": "3f9db306-b644-4a3b-8239-0ab41e0d3f73",
        "title": "Choose VIP area",
        "price": 75
          }
      ]
  }
]
