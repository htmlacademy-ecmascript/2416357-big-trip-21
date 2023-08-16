import { getRandomArrayElement } from '../utils.js';

const mockDestinations = [
  {
    "id": "b92b887e-130d-494c-9e6a-e27f4e64971a",
    "description": "Rome - a true asian pearl",
    "name": "Rome",
    "pictures": []
  },
  {
    "id": "a443ea95-c570-4d57-933e-5775498a9bd5",
    "description": "Rome - in a middle of Europe",
    "name": "Rome",
    "pictures": [
      {
        "src": "https://21.objects.pages.academy/static/destinations/20.jpg",
        "description": "Rome is a beautiful city"
      },
      {
        "src": "https://21.objects.pages.academy/static/destinations/8.jpg",
        "description": "Rome in a middle of Europe"
      }
    ]
  },
  {
    "id": "76f50ed5-0f60-48be-9cc1-2c95cc47bb8d",
    "description": "Rome - a true asian pearl",
    "name": "Rome",
    "pictures": []
  },
  {
    "id": "40f8f279-dd45-4d2b-89fc-0d2a7fabf29c",
    "description": "Chamonix - with crowded streets",
    "name": "Chamonix",
    "pictures": [
      {
        "src": "https://21.objects.pages.academy/static/destinations/19.jpg",
        "description": "Chamonix with a beautiful old town"
      },
      {
        "src": "https://21.objects.pages.academy/static/destinations/12.jpg",
        "description": "Chamonix full of of cozy canteens where you can try the best coffee in the Middle East"
      },
      {
        "src": "https://21.objects.pages.academy/static/destinations/4.jpg",
        "description": "Chamonix for those who value comfort and coziness"
      },
      {
        "src": "https://21.objects.pages.academy/static/destinations/18.jpg",
        "description": "Chamonix for those who value comfort and coziness"
      },
      {
        "src": "https://21.objects.pages.academy/static/destinations/19.jpg",
        "description": "Chamonix with an embankment of a mighty river as a centre of attraction"
      }
    ]
  },
  {
    "id": "a4390158-1b9a-4a4d-93b2-e5ea1e1d080f",
    "description": "Chamonix - a true asian pearl",
    "name": "Chamonix",
    "pictures": [
      {
        "src": "https://21.objects.pages.academy/static/destinations/12.jpg",
        "description": "Chamonix in a middle of Europe"
      },
      {
        "src": "https://21.objects.pages.academy/static/destinations/13.jpg",
        "description": "Chamonix with a beautiful old town"
      }
    ]
  },
  {
    "id": "dd9d422b-4a56-4ab5-9235-9f6af4e34a2f",
    "name": "Milan"
  },
  {
    "id": "ea410d96-b363-46bb-a99a-98caa1289dc1",
    "name": "Sochi"
  },
  {
    "id": "be0f7b51-902b-488a-8cbb-74624a4a826b",
    "description": "Madrid - famous for its crowded street markets with the best street food in Asia",
    "name": "Madrid",
    "pictures": [
      {
        "src": "https://21.objects.pages.academy/static/destinations/11.jpg",
        "description": "Madrid a perfect place to stay with a family"
      },
      {
        "src": "https://21.objects.pages.academy/static/destinations/10.jpg",
        "description": "Madrid a true asian pearl"
      },
      {
        "src": "https://21.objects.pages.academy/static/destinations/9.jpg",
        "description": "Madrid is a beautiful city"
      },
      {
        "src": "https://21.objects.pages.academy/static/destinations/4.jpg",
        "description": "Madrid is a beautiful city"
      }
    ]
  },
  {
    "id": "013a0234-1ded-4e18-b76d-e67ccedd48a2",
    "description": "Vien - is a beautiful city",
    "name": "Vien",
    "pictures": [
      {
        "src": "https://21.objects.pages.academy/static/destinations/19.jpg",
        "description": "Vien in a middle of Europe"
      },
      {
        "src": "https://21.objects.pages.academy/static/destinations/17.jpg",
        "description": "Vien famous for its crowded street markets with the best street food in Asia"
      },
      {
        "src": "https://21.objects.pages.academy/static/destinations/4.jpg",
        "description": "Vien with a beautiful old town"
      },
      {
        "src": "https://21.objects.pages.academy/static/destinations/20.jpg",
        "description": "Vien full of of cozy canteens where you can try the best coffee in the Middle East"
      },
      {
        "src": "https://21.objects.pages.academy/static/destinations/11.jpg",
        "description": "Vien is a beautiful city"
      }
    ]
  },
  {
    "id": "1ef5bd66-de36-47f9-92f5-5215f027abe3",
    "description": "Kioto - full of of cozy canteens where you can try the best coffee in the Middle East",
    "name": "Kioto",
    "pictures": [
      {
        "src": "https://21.objects.pages.academy/static/destinations/15.jpg",
        "description": "Kioto is a beautiful city"
      }
    ]
  }
]
